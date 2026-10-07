import fileNames from './config.json';

export interface UpgradePathGuide {
  version: string;
  file: string;
  uri: string;
  title: string;
}

export interface UpgradePathResult {
  fromVersion: string | null;
  toVersion: string;
  guides: UpgradePathGuide[];
  codemods: string[];
  notes: string[];
}

const GUIDE_VERSION_PATTERN = /upgrade-guides\/(\d+)\.0-UPGRADE-GUIDE\.md$/;

function parseGuideVersion(fileName: string): number | null {
  const match = fileName.match(GUIDE_VERSION_PATTERN);
  return match ? Number(match[1]) : null;
}

function parseMajor(version: string | null | undefined): number | null {
  if (!version) {
    return null;
  }

  const match = version.match(/^(\d+)/);
  return match ? Number(match[1]) : null;
}

function guideTitle(fileName: string): string {
  const version = parseGuideVersion(fileName);
  return version ? `Canvas Kit v${version}.0 Upgrade Guide` : fileName;
}

export function getCanvasUpgradePath(options: {
  fromVersion: string | null;
  toVersion: string;
}): UpgradePathResult {
  const fromMajor = parseMajor(options.fromVersion);
  const toMajor = parseMajor(options.toVersion) ?? 16;

  const guides = fileNames.upgradeGuideFiles
    .map(file => ({file, version: parseGuideVersion(file)}))
    .filter((entry): entry is {file: string; version: number} => entry.version !== null)
    .filter(entry => {
      if (fromMajor === null) {
        return entry.version <= toMajor;
      }

      return entry.version > fromMajor && entry.version <= toMajor;
    })
    .map(entry => ({
      version: `${entry.version}.0`,
      file: entry.file,
      uri: `docs://${entry.file.replace(/^upgrade-guides\//, 'upgrade-guides/').replace('.md', '')}`,
      title: guideTitle(entry.file),
    }));

  const codemods: string[] = [];
  const notes: string[] = [];

  if (fromMajor !== null && toMajor - fromMajor >= 1) {
    codemods.push('npx @workday/canvas-kit-codemod upgrade <target-version>');
  }

  if (guides.some(guide => guide.version.startsWith('14'))) {
    notes.push(
      'v14 migration moves tokens from @workday/canvas-kit-react/tokens to @workday/canvas-tokens-web. See llm-token-migration-14.txt.'
    );
  }

  if (guides.some(guide => guide.version.startsWith('15'))) {
    notes.push(
      'v15 introduces expressive icons and preview package promotions. Review icon migration docs if upgrading system icons.'
    );
  }

  if (guides.some(guide => guide.version.startsWith('16'))) {
    notes.push(
      'v16 promotes preview components and updates token namespaces. Verify preview-only packages before adopting new imports.'
    );
  }

  return {
    fromVersion: options.fromVersion,
    toVersion: options.toVersion,
    guides,
    codemods,
    notes,
  };
}
