import * as React from 'react';

import {
  AccessiblePalette,
  type AlphaLevel,
  PaletteStep,
  generateAccessiblePalette,
  generateNeutralPalette,
} from '@workday/canvas-kit-labs-react/common';
import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Box, Flex} from '@workday/canvas-kit-react/layout';
import {Switch} from '@workday/canvas-kit-react/switch';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

// Contrast pairs to display - common combinations for UI design
const CONTRAST_PAIRS = [
  {light: 100, dark: 600, label: 'Light bg + Text'},
  {light: 200, dark: 700, label: 'Surface + Text'},
  {light: 500, dark: 'white', label: 'Primary + White'},
  {light: 600, dark: 'white', label: 'Dark + White'},
] as const;

// Mapping from palette steps to @workday/canvas-tokens-web brand tokens
const BRAND_TOKEN_MAPPING = [
  {step: 25, token: 'brand.primary.lightest', cssVar: '--cnvs-brand-primary-lightest'},
  {step: 50, token: 'brand.primary.lighter', cssVar: '--cnvs-brand-primary-lighter'},
  {step: 200, token: 'brand.primary.light', cssVar: '--cnvs-brand-primary-light'},
  {step: 600, token: 'brand.primary.base', cssVar: '--cnvs-brand-primary-base'},
  {step: 700, token: 'brand.primary.dark', cssVar: '--cnvs-brand-primary-dark'},
  {step: 800, token: 'brand.primary.darkest', cssVar: '--cnvs-brand-primary-darkest'},
] as const;

// Alpha token mapping for brand.primary (step 600 = base) — a25, a50, a100, a200
const ALPHA_LEVELS: AlphaLevel[] = ['a25', 'a50', 'a100', 'a200'];
const BRAND_ALPHA_STEP = 600;
const BRAND_ALPHA_TOKEN_MAPPING = ALPHA_LEVELS.map(level => ({
  step: BRAND_ALPHA_STEP,
  alphaLevel: level,
  token: `brand.primary.${level}`,
  cssVar: `--cnvs-brand-primary-${level}` as const,
}));

const getWcagLevel = (ratio: number): {level: string; color: string} => {
  if (ratio >= 7) {
    return {level: 'AAA', color: '#16a34a'};
  }
  if (ratio >= 4.5) {
    return {level: 'AA', color: '#2563eb'};
  }
  if (ratio >= 3) {
    return {level: 'A', color: '#ca8a04'};
  }
  return {level: 'Fail', color: '#dc2626'};
};

const ColorSwatch = ({
  step,
  isSelected,
  onClick,
}: {
  step: PaletteStep;
  isSelected?: boolean;
  onClick?: () => void;
}) => {
  const textColor = step.oklch.l > 0.6 ? '#000' : '#fff';

  return (
    <Box
      onClick={onClick}
      style={{
        backgroundColor: step.hex,
        padding: '12px 16px',
        borderRadius: '8px',
        border: isSelected ? '3px solid #000' : '1px solid rgba(0,0,0,0.1)',
        minWidth: '120px',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.1s ease',
      }}
    >
      <Text
        as="div"
        style={{
          color: textColor,
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        {step.step}
      </Text>
      <Text
        as="div"
        style={{
          color: textColor,
          fontSize: '12px',
          fontFamily: 'monospace',
        }}
      >
        {step.hex}
      </Text>
      <Flex gap="xxs" marginTop="xxs">
        <Text
          as="span"
          style={{
            color: textColor,
            fontSize: '10px',
            opacity: 0.8,
          }}
        >
          {step.contrastRatio.toFixed(2)}:1
        </Text>
        {step.wcagAA && (
          <Text
            as="span"
            style={{
              color: textColor,
              fontSize: '10px',
              backgroundColor: 'rgba(0,0,0,0.2)',
              padding: '0 4px',
              borderRadius: '4px',
            }}
          >
            AA
          </Text>
        )}
        {step.wcagAAA && (
          <Text
            as="span"
            style={{
              color: textColor,
              fontSize: '10px',
              backgroundColor: 'rgba(0,0,0,0.3)',
              padding: '0 4px',
              borderRadius: '4px',
            }}
          >
            AAA
          </Text>
        )}
      </Flex>
    </Box>
  );
};

const TokenRow = ({
  step,
  token,
  cssVar,
  hex,
  isDarkMode,
  onCopy,
  copied,
}: {
  step: number;
  token: string;
  cssVar: string;
  hex: string;
  isDarkMode: boolean;
  onCopy: (text: string) => void;
  copied: boolean;
}) => {
  const textColor = isDarkMode ? '#e5e5e5' : '#333';
  const mutedColor = isDarkMode ? '#888' : '#666';

  return (
    <Flex
      alignItems="center"
      gap="s"
      style={{
        padding: '8px 12px',
        borderRadius: '6px',
        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
      }}
    >
      <Box
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: hex,
          borderRadius: '6px',
          border: '1px solid rgba(0,0,0,0.1)',
          flexShrink: 0,
        }}
      />
      <Box style={{flex: 1, minWidth: 0}}>
        <Text
          as="div"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: textColor,
          }}
        >
          {token}
        </Text>
        <Text
          as="div"
          style={{
            fontSize: '11px',
            color: mutedColor,
            fontFamily: 'monospace',
          }}
        >
          Step {step} → {hex}
        </Text>
      </Box>
      <Tooltip title={copied ? 'Copied!' : 'Copy CSS variable'}>
        <TertiaryButton size="small" onClick={() => onCopy(`${cssVar}: ${hex};`)}>
          {copied ? '✓' : 'Copy'}
        </TertiaryButton>
      </Tooltip>
    </Flex>
  );
};

const AlphaTokenRow = ({
  step,
  alphaLevel,
  token,
  cssVar,
  hexWithAlpha,
  isDarkMode,
  onCopy,
  copied,
}: {
  step: number;
  alphaLevel: AlphaLevel;
  token: string;
  cssVar: string;
  hexWithAlpha: string;
  isDarkMode: boolean;
  onCopy: (text: string) => void;
  copied: boolean;
}) => {
  const textColor = isDarkMode ? '#e5e5e5' : '#333';
  const mutedColor = isDarkMode ? '#888' : '#666';

  return (
    <Flex
      alignItems="center"
      gap="s"
      style={{
        padding: '8px 12px',
        borderRadius: '6px',
        backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
      }}
    >
      <Box
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: hexWithAlpha,
          borderRadius: '6px',
          border: '1px solid rgba(0,0,0,0.1)',
          flexShrink: 0,
        }}
      />
      <Box style={{flex: 1, minWidth: 0}}>
        <Text
          as="div"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: textColor,
          }}
        >
          {token}
        </Text>
        <Text
          as="div"
          style={{
            fontSize: '11px',
            color: mutedColor,
            fontFamily: 'monospace',
          }}
        >
          Step {step} · {alphaLevel} → {hexWithAlpha}
        </Text>
      </Box>
      <Tooltip title={copied ? 'Copied!' : 'Copy CSS variable'}>
        <TertiaryButton size="small" onClick={() => onCopy(`${cssVar}: ${hexWithAlpha};`)}>
          {copied ? '✓' : 'Copy'}
        </TertiaryButton>
      </Tooltip>
    </Flex>
  );
};

const ContrastPair = ({
  palette,
  lightStep,
  darkStep,
  label,
}: {
  palette: AccessiblePalette;
  lightStep: number | 'white' | 'black';
  darkStep: number | 'white' | 'black';
  label: string;
}) => {
  const lightHex =
    lightStep === 'white'
      ? '#ffffff'
      : lightStep === 'black'
        ? '#000000'
        : palette.getHex(lightStep);
  const darkHex =
    darkStep === 'white' ? '#ffffff' : darkStep === 'black' ? '#000000' : palette.getHex(darkStep);

  if (!lightHex || !darkHex) {
    return null;
  }

  // Calculate contrast ratio manually
  const getLuminance = (hex: string) => {
    const rgb = hex
      .replace('#', '')
      .match(/.{2}/g)!
      .map(x => {
        const c = parseInt(x, 16) / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  };

  const l1 = getLuminance(lightHex);
  const l2 = getLuminance(darkHex);
  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  const {level, color} = getWcagLevel(ratio);

  return (
    <Flex alignItems="center" gap="xs" style={{fontSize: '13px'}}>
      <Box
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: lightHex,
          borderRadius: '4px',
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      />
      <Text as="span" style={{color: '#666'}}>
        vs
      </Text>
      <Box
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: darkHex,
          borderRadius: '4px',
          border: '1px solid rgba(0,0,0,0.1)',
        }}
      />
      <Text as="span" style={{fontFamily: 'monospace', minWidth: '50px'}}>
        {ratio.toFixed(1)}:1
      </Text>
      <Text
        as="span"
        style={{
          backgroundColor: color,
          color: '#fff',
          padding: '2px 6px',
          borderRadius: '4px',
          fontSize: '11px',
          fontWeight: 'bold',
        }}
      >
        {level}
      </Text>
      <Text as="span" style={{color: '#888', fontSize: '12px'}}>
        {label}
      </Text>
    </Flex>
  );
};

export const PaletteGenerator = () => {
  const [inputColor, setInputColor] = React.useState('#0875E1');
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isNeutral, setIsNeutral] = React.useState(false);
  const [hueShift, setHueShift] = React.useState(5);
  const [minChroma, setMinChroma] = React.useState(0.02);
  const [copiedStep, setCopiedStep] = React.useState<number | null>(null);
  const [copiedToken, setCopiedToken] = React.useState<string | null>(null);

  const palette = React.useMemo(() => {
    try {
      const options = {
        backgroundLuminance: isDarkMode ? 0.1 : 1.0,
        hueShiftAmount: hueShift,
        minChroma,
      };

      if (isNeutral) {
        return generateNeutralPalette(inputColor, options);
      }
      return generateAccessiblePalette(inputColor, options);
    } catch {
      return generateAccessiblePalette('#0875E1');
    }
  }, [inputColor, isDarkMode, isNeutral, hueShift, minChroma]);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputColor(event.target.value);
  };

  const copyToClipboard = (step: PaletteStep) => {
    navigator.clipboard.writeText(step.hex);
    setCopiedStep(step.step);
    setTimeout(() => setCopiedStep(null), 1500);
  };

  const copyAllColors = () => {
    const colorMap = palette.steps.reduce(
      (acc, step) => {
        acc[step.step] = step.hex;
        return acc;
      },
      {} as Record<number, string>
    );
    navigator.clipboard.writeText(JSON.stringify(colorMap, null, 2));
    setCopiedStep(-1);
    setTimeout(() => setCopiedStep(null), 1500);
  };

  const copyTokenValue = (text: string, token: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  const copyAllBrandTokens = () => {
    const solidCss = BRAND_TOKEN_MAPPING.map(
      ({step, cssVar}) => `  ${cssVar}: ${palette.getHex(step)};`
    ).join('\n');
    const alphaCss = BRAND_ALPHA_TOKEN_MAPPING.map(
      ({alphaLevel, cssVar}) => `  ${cssVar}: ${palette.getAlphaHex(BRAND_ALPHA_STEP, alphaLevel)};`
    ).join('\n');
    const fullCss = `:root {\n${solidCss}\n${alphaCss}\n}`;
    navigator.clipboard.writeText(fullCss);
    setCopiedToken('all');
    setTimeout(() => setCopiedToken(null), 1500);
  };

  const bgColor = isDarkMode ? '#1a1a1a' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  const borderColor = isDarkMode ? '#333' : '#e5e5e5';

  return (
    <Box
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: '24px',
        borderRadius: '12px',
        border: `1px solid ${borderColor}`,
        transition: 'all 0.3s ease',
      }}
    >
      {/* Controls Section */}
      <Flex gap="l" marginBottom="l" flexWrap="wrap" alignItems="flex-start">
        {/* Color Input */}
        <Box>
          <FormField>
            <FormField.Label>Brand Color</FormField.Label>
            <Flex gap="xs" alignItems="center">
              <input
                type="color"
                value={palette.getHex(500) || '#0875E1'}
                onChange={e => setInputColor(e.target.value)}
                style={{
                  width: '48px',
                  height: '40px',
                  padding: 0,
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              />
              <FormField.Input
                as={TextInput}
                value={inputColor}
                onChange={handleColorChange}
                style={{width: '140px'}}
              />
            </Flex>
          </FormField>
        </Box>

        {/* Toggles */}
        <Box style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <Flex alignItems="center" gap="xs">
            <Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
            <Text as="span">Dark Mode</Text>
          </Flex>
          <Flex alignItems="center" gap="xs">
            <Switch checked={isNeutral} onChange={() => setIsNeutral(!isNeutral)} />
            <Text as="span">Neutral Palette</Text>
          </Flex>
        </Box>

        {/* Sliders */}
        <Box style={{display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '200px'}}>
          <Box>
            <Text as="div" style={{fontSize: '13px', marginBottom: '4px'}}>
              Hue Shift: {hueShift}°
            </Text>
            <input
              type="range"
              min="0"
              max="30"
              value={hueShift}
              onChange={e => setHueShift(Number(e.target.value))}
              style={{width: '100%'}}
            />
          </Box>
          <Box>
            <Text as="div" style={{fontSize: '13px', marginBottom: '4px'}}>
              Min Chroma: {minChroma.toFixed(3)}
            </Text>
            <input
              type="range"
              min="0"
              max="0.1"
              step="0.005"
              value={minChroma}
              onChange={e => setMinChroma(Number(e.target.value))}
              style={{width: '100%'}}
            />
          </Box>
        </Box>
      </Flex>

      {/* Palette Display */}
      <Flex justifyContent="space-between" alignItems="center" marginBottom="s">
        <Text as="h3" typeLevel="heading.small">
          {isNeutral ? 'Neutral' : 'Accessible'} Palette {isDarkMode && '(Dark Mode)'}
        </Text>
        <Tooltip title={copiedStep === -1 ? 'Copied!' : 'Copy all colors as JSON'}>
          <TertiaryButton size="small" onClick={copyAllColors}>
            {copiedStep === -1 ? 'Copied!' : 'Copy All'}
          </TertiaryButton>
        </Tooltip>
      </Flex>

      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '8px',
          marginBottom: '24px',
        }}
      >
        {palette.steps.map(step => (
          <Tooltip key={step.step} title={copiedStep === step.step ? 'Copied!' : 'Click to copy'}>
            <ColorSwatch
              step={step}
              isSelected={step.step === 500}
              onClick={() => copyToClipboard(step)}
            />
          </Tooltip>
        ))}
      </Box>

      {/* Alpha (transparency) — under the accessible palette */}
      <Text
        as="h4"
        typeLevel="body.large"
        marginBottom="xs"
        fontWeight="bold"
        style={{fontSize: '14px'}}
      >
        Alpha (transparency)
      </Text>
      <Text
        as="p"
        style={{
          fontSize: '13px',
          color: isDarkMode ? '#aaa' : '#666',
          marginBottom: 's',
        }}
      >
        Transparent variants with alpha channel (a25 = 8%, a50 = 11%, a100 = 17%, a200 = 31%
        opacity). Shown over background so transparency is visible. Example for step{' '}
        {BRAND_ALPHA_STEP} (base):
      </Text>
      <Flex gap="s" marginBottom="l" flexWrap="wrap" alignItems="flex-start">
        {ALPHA_LEVELS.map(level => {
          const hexWithAlpha = palette.getAlphaHex(BRAND_ALPHA_STEP, level);
          return (
            hexWithAlpha && (
              <Flex key={level} alignItems="center" gap="xs">
                <Box
                  style={{
                    width: '48px',
                    height: '40px',
                    backgroundColor: bgColor,
                    borderRadius: '6px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  title={`${level}: transparent over background`}
                >
                  <Box
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: hexWithAlpha,
                      borderRadius: '6px',
                    }}
                  />
                </Box>
                <Box>
                  <Text
                    as="div"
                    style={{fontSize: '12px', fontFamily: 'monospace', fontWeight: 600}}
                  >
                    {level}
                  </Text>
                  <Text as="div" style={{fontSize: '11px', color: isDarkMode ? '#888' : '#666'}}>
                    {level === 'a25'
                      ? '8%'
                      : level === 'a50'
                        ? '11%'
                        : level === 'a100'
                          ? '17%'
                          : '31%'}{' '}
                    opacity
                  </Text>
                </Box>
              </Flex>
            )
          );
        })}
      </Flex>

      {/* Brand Token Mapping Section */}
      <Flex justifyContent="space-between" alignItems="center" marginBottom="s">
        <Text as="h3" typeLevel="heading.small">
          Canvas Tokens Mapping
        </Text>
        <Tooltip title={copiedToken === 'all' ? 'Copied!' : 'Copy all as CSS'}>
          <TertiaryButton size="small" onClick={copyAllBrandTokens}>
            {copiedToken === 'all' ? 'Copied!' : 'Copy All CSS'}
          </TertiaryButton>
        </Tooltip>
      </Flex>
      <Text
        as="p"
        style={{
          fontSize: '13px',
          color: isDarkMode ? '#aaa' : '#666',
          marginBottom: '12px',
        }}
      >
        Use these values to configure <code>@workday/canvas-tokens-web</code> brand tokens (solid +
        transparent alpha) in your CSS:
      </Text>
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '8px',
          marginBottom: '24px',
        }}
      >
        {BRAND_TOKEN_MAPPING.map(({step, token, cssVar}) => (
          <TokenRow
            key={token}
            step={step}
            token={token}
            cssVar={cssVar}
            hex={palette.getHex(step) || ''}
            isDarkMode={isDarkMode}
            onCopy={text => copyTokenValue(text, token)}
            copied={copiedToken === token}
          />
        ))}
        {BRAND_ALPHA_TOKEN_MAPPING.map(({step, alphaLevel, token, cssVar}) => (
          <AlphaTokenRow
            key={token}
            step={step}
            alphaLevel={alphaLevel}
            token={token}
            cssVar={cssVar}
            hexWithAlpha={palette.getAlphaHex(step, alphaLevel) || ''}
            isDarkMode={isDarkMode}
            onCopy={text => copyTokenValue(text, token)}
            copied={copiedToken === token}
          />
        ))}
      </Box>

      {/* Contrast Ratios Section */}
      <Text as="h3" typeLevel="heading.small" marginBottom="s">
        Contrast Ratios
      </Text>
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px',
          marginBottom: '24px',
          padding: '16px',
          backgroundColor: isDarkMode ? '#2a2a2a' : '#f5f5f5',
          borderRadius: '8px',
        }}
      >
        {CONTRAST_PAIRS.map(({light, dark, label}) => (
          <ContrastPair
            key={`${light}-${dark}`}
            palette={palette}
            lightStep={light}
            darkStep={dark}
            label={label}
          />
        ))}
      </Box>

      {/* Usage Example */}
      <Text as="h3" typeLevel="heading.small" marginBottom="s">
        Usage Example
      </Text>
      <Box
        style={{
          backgroundColor: '#1e1e1e',
          borderRadius: '8px',
          padding: '16px',
          overflow: 'auto',
        }}
      >
        <pre
          style={{
            color: '#d4d4d4',
            margin: 0,
            fontSize: '13px',
            fontFamily: 'Consolas, Monaco, monospace',
          }}
        >
          {`// Configure brand tokens in your CSS (e.g., index.css)
:root {
  ${BRAND_TOKEN_MAPPING.map(({step, cssVar}) => `${cssVar}: ${palette.getHex(step)};`).join('\n  ')}
  ${BRAND_ALPHA_TOKEN_MAPPING.map(({alphaLevel, cssVar}) => `${cssVar}: ${palette.getAlphaHex(BRAND_ALPHA_STEP, alphaLevel)};`).join('\n  ')}
}

// Or generate dynamically with JavaScript
import { generateAccessiblePalette${
            isNeutral ? ', generateNeutralPalette' : ''
          } } from '@workday/canvas-kit-labs-react/common';

${
  isNeutral
    ? `const palette = generateNeutralPalette('${inputColor}', {
  backgroundLuminance: ${isDarkMode ? '0.1' : '1.0'},
});`
    : `const palette = generateAccessiblePalette('${inputColor}', {
  backgroundLuminance: ${isDarkMode ? '0.1' : '1.0'},
  hueShiftAmount: ${hueShift},
  minChroma: ${minChroma},
});`
}

// Map to brand tokens (solid + alpha)
const brandTokens = {
  lightest: palette.getHex(25),   // ${palette.getHex(25)}
  lighter: palette.getHex(50),    // ${palette.getHex(50)}
  light: palette.getHex(200),     // ${palette.getHex(200)}
  base: palette.getHex(600),      // ${palette.getHex(600)}
  dark: palette.getHex(700),      // ${palette.getHex(700)}
  darkest: palette.getHex(800),   // ${palette.getHex(800)}
  a25: palette.getAlphaHex(600, 'a25'),   // ${palette.getAlphaHex(600, 'a25')}
  a50: palette.getAlphaHex(600, 'a50'),   // ${palette.getAlphaHex(600, 'a50')}
  a100: palette.getAlphaHex(600, 'a100'), // ${palette.getAlphaHex(600, 'a100')}
  a200: palette.getAlphaHex(600, 'a200'), // ${palette.getAlphaHex(600, 'a200')}
};`}
        </pre>
      </Box>
    </Box>
  );
};
