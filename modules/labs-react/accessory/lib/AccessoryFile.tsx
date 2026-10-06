import {cornerShapeStencil, createComponent} from '@workday/canvas-kit-react/common';
import {SystemIconProps} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {
  documentIcon,
  fileIcon,
  pdfIcon,
  playCircleIcon,
  stackIcon,
  tableExpandIcon,
  txtIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {Accessory, AccessoryProps} from './Accessory';
import {AccessoryIconGraphic, AccessoryIconVariant} from './AccessoryIcon';

/**
 * The kind of file `AccessoryFile` represents.
 */
export type AccessoryFileType =
  | 'pdf'
  | 'spreadsheet'
  | 'document'
  | 'presentation'
  | 'video'
  | 'file'
  | 'txt'
  | 'empty';

export interface AccessoryFileProps extends AccessoryProps {
  /**
   * The file type. Colored types use an accent fill. `file` and `txt` use `surface.alt` with a
   * `border.default` stroke. `empty` is a shimmer placeholder. `video` centers a play icon.
   * @default 'file'
   */
  type?: AccessoryFileType;
}

const inverse = system.color.fg.inverse;
const altSurface = system.legacy.color.surface.alt.default;

const fileIcons: Record<
  Exclude<AccessoryFileType, 'empty'>,
  {
    icon: SystemIconProps['icon'];
    background: string;
    color: string;
    variant?: AccessoryIconVariant;
  }
> = {
  pdf: {icon: pdfIcon, background: system.legacy.color.brand.accent.critical, color: inverse},
  spreadsheet: {
    icon: tableExpandIcon,
    background: system.legacy.color.brand.accent.positive,
    color: inverse,
  },
  document: {icon: documentIcon, background: system.legacy.color.accent.info, color: inverse},
  presentation: {
    icon: stackIcon,
    background: system.legacy.color.brand.accent.caution,
    color: inverse,
  },
  video: {icon: playCircleIcon, background: altSurface, color: inverse},
  file: {
    icon: fileIcon,
    background: altSurface,
    color: system.color.fg.default,
    variant: 'outline',
  },
  txt: {
    icon: txtIcon,
    background: altSurface,
    color: system.color.fg.default,
    variant: 'outline',
  },
};

export const accessoryFileEmptyStencil = createStencil({
  base: {
    position: 'absolute',
    inset: 0,
    borderRadius: cssVar(cornerShapeStencil.vars.shape),
    cornerShape: 'superellipse(1.1)',
    background: `linear-gradient(to left, ${system.legacy.color.surface.alt.strong}, ${system.legacy.color.surface.loading})`,
  },
});

/**
 * `AccessoryFile` renders a file-type tile: PDF, spreadsheet, document, presentation, video,
 * a generic file, text, or an empty placeholder. Colored types keep their fill at every size.
 * Generic file and text use `surface.alt` and a `border.default` stroke. Always decorative.
 */
export const AccessoryFile = createComponent('span')({
  displayName: 'AccessoryFile',
  Component: (
    {type = 'file', size = 'extraLarge', color, background, ...elemProps}: AccessoryFileProps,
    ref,
    Element
  ) => {
    if (type === 'empty') {
      return (
        <Accessory
          as={Element}
          ref={ref}
          background={background}
          color={color}
          size={size}
          {...handleCsProp(elemProps)}
        >
          <span {...handleCsProp({}, accessoryFileEmptyStencil())} />
        </Accessory>
      );
    }

    const treatment = fileIcons[type];

    return (
      <Accessory
        as={Element}
        ref={ref}
        background={background ?? treatment.background}
        color={color ?? treatment.color}
        size={size}
        {...handleCsProp(elemProps)}
      >
        <AccessoryIconGraphic icon={treatment.icon} variant={treatment.variant ?? 'grey'} />
      </Accessory>
    );
  },
});
