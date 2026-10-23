import type {
  ComponentCatalog,
  ComponentCatalogEntry,
  ComponentLookupResult,
  ComponentSearchResult,
  IconCatalog,
  IconCatalogEntry,
  IconSearchResult,
  TokenCatalog,
  TokenCatalogEntry,
  TokenValidationResult,
} from './catalog-types';

function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function scoreMatch(query: string, candidate: string): number {
  const normalizedQuery = normalize(query);
  const normalizedCandidate = normalize(candidate);

  if (!normalizedQuery || !normalizedCandidate) {
    return 0;
  }

  if (normalizedQuery === normalizedCandidate) {
    return 100;
  }

  if (normalizedCandidate.startsWith(normalizedQuery)) {
    return 80;
  }

  if (normalizedCandidate.includes(normalizedQuery)) {
    return 60;
  }

  return 0;
}

function bestScore(query: string, values: string[]): number {
  return values.reduce((best, value) => Math.max(best, scoreMatch(query, value)), 0);
}

function levenshtein(a: string, b: string): number {
  const matrix = Array.from({length: a.length + 1}, () => new Array(b.length + 1).fill(0));

  for (let i = 0; i <= a.length; i += 1) {
    matrix[i][0] = i;
  }

  for (let j = 0; j <= b.length; j += 1) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

function rankComponents(
  query: string,
  components: ComponentCatalogEntry[],
  limit: number
): ComponentCatalogEntry[] {
  return components
    .map(component => {
      const matchScore = bestScore(query, [
        component.name,
        component.subpath,
        component.canonicalImport,
        component.storySlug ?? '',
        ...component.aliases,
        ...component.exports,
      ]);
      return {
        component,
        score: matchScore + (component.recommended ? 20 : 0) - (component.deprecated ? 30 : 0),
      };
    })
    .filter(item => item.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return left.component.name.localeCompare(right.component.name);
    })
    .slice(0, limit)
    .map(item => item.component);
}

function rankIcons(query: string, icons: IconCatalogEntry[], limit: number): IconCatalogEntry[] {
  return icons
    .map(icon => {
      const migrationScore = (icon.previousNames ?? []).some(
        previousName => normalize(previousName) === normalize(query)
      )
        ? 120
        : 0;
      const matchScore = bestScore(query, [
        icon.name,
        icon.exportName,
        icon.figmaName ?? '',
        icon.category ?? '',
        ...icon.tags,
        ...icon.aliases,
      ]);

      return {
        icon,
        score: Math.max(migrationScore, matchScore) - (icon.deprecated ? 10 : 0),
      };
    })
    .filter(item => item.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return left.icon.name.localeCompare(right.icon.name);
    })
    .slice(0, limit)
    .map(item => item.icon);
}

function findTokenEntry(
  catalog: TokenCatalog,
  token: string,
  channel: 'production' | 'vision'
): TokenCatalogEntry | undefined {
  const normalized = normalize(token).replace(/-/g, '.');
  const dotted = token.trim().toLowerCase();

  return catalog.tokens.find(entry => {
    return (
      (entry.channel === channel && entry.key.toLowerCase() === dotted) ||
      (entry.channel === channel && normalize(entry.key) === normalized) ||
      (entry.channel === channel && entry.aliases.some(alias => alias.toLowerCase() === dotted))
    );
  });
}

function suggestTokens(
  catalog: TokenCatalog,
  token: string,
  channel: 'production' | 'vision',
  limit = 5
): string[] {
  const normalized = token.trim().toLowerCase();
  const namespace = normalized.split('.')[0];

  return catalog.tokens
    .filter(
      entry =>
        entry.channel === channel &&
        (!namespace || entry.namespace === namespace || entry.key.startsWith(`${namespace}.`))
    )
    .map(entry => ({
      key: entry.key,
      distance: levenshtein(normalized, entry.key.toLowerCase()),
    }))
    .sort((left, right) => {
      if (left.distance !== right.distance) {
        return left.distance - right.distance;
      }

      return left.key.localeCompare(right.key);
    })
    .slice(0, limit)
    .map(entry => entry.key);
}

export function searchComponents(
  catalog: ComponentCatalog,
  query: string,
  limit = 10
): ComponentSearchResult {
  const boundedLimit = Math.max(1, Math.min(limit, 25));
  const results = rankComponents(query, catalog.components, boundedLimit);

  return {
    meta: catalog.meta,
    query,
    count: results.length,
    results,
  };
}

export function getComponent(
  catalog: ComponentCatalog,
  query: string,
  suggestionLimit = 5
): ComponentLookupResult {
  const normalizedQuery = normalize(query);
  const matches = catalog.components.filter(component => {
    return (
      normalize(component.name) === normalizedQuery ||
      normalize(component.subpath) === normalizedQuery ||
      component.storySlug === query ||
      component.aliases.includes(query) ||
      component.aliases.some(alias => normalize(alias) === normalizedQuery)
    );
  });

  const tierRank = {production: 0, preview: 1, labs: 2};
  const exact = matches.sort((left, right) => {
    if (left.recommended !== right.recommended) {
      return left.recommended ? -1 : 1;
    }
    if (left.deprecated !== right.deprecated) {
      return left.deprecated ? 1 : -1;
    }
    return tierRank[left.status] - tierRank[right.status];
  })[0];

  const suggestions = exact
    ? []
    : rankComponents(query, catalog.components, Math.max(1, Math.min(suggestionLimit, 10)));

  return {
    meta: catalog.meta,
    query,
    match: exact,
    suggestions,
  };
}

export function validateTokens(
  catalog: TokenCatalog,
  tokens: string[],
  channel: 'production' | 'vision' = 'production'
): TokenValidationResult {
  const valid: TokenValidationResult['valid'] = [];
  const invalid: TokenValidationResult['invalid'] = [];

  for (const token of tokens) {
    const entry = findTokenEntry(catalog, token, channel);

    if (entry) {
      valid.push({token, entry});
    } else {
      invalid.push({
        token,
        suggestions: suggestTokens(catalog, token, channel),
      });
    }
  }

  return {
    meta: catalog.meta,
    valid,
    invalid,
  };
}

export function searchIcons(catalog: IconCatalog, query: string, limit = 10): IconSearchResult {
  const boundedLimit = Math.max(1, Math.min(limit, 25));
  const results = rankIcons(query, catalog.icons, boundedLimit);

  return {
    meta: catalog.meta,
    query,
    count: results.length,
    results,
  };
}
