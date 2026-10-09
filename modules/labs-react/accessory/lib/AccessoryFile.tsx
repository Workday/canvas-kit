import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {
  documentIcon,
  pdfIcon,
  playCircleIcon,
  stackIcon,
  tableExpandIcon,
  txtIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {Accessory, AccessoryProps, accessoryStencil} from './Accessory';

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
  | 'txt';

export interface AccessoryFileProps extends AccessoryProps {
  /**
   * The file type. Chooses the glyph and sets the tile fill and icon color through a stencil
   * modifier. Colored types keep their accent fill at every size. `file` and `txt` use
   * `surface.alt` with a `border.default` stroke. `video` uses `surface.alt` and an inverse icon.
   * `color` and `background` override the type colors.
   * @default 'file'
   */
  type?: AccessoryFileType;
}

/**
 * File-type treatment for `AccessoryFile`. Each `type` sets the tile fill and icon color.
 * `outline` adds the default border used by `file` and `txt`. `color` and `background` on
 * `Accessory` still override the type colors.
 */
export const accessoryFileStencil = createStencil({
  parts: {
    icon: 'accessory-icon',
  },
  base: ({iconPart}) => ({
    [iconPart]: {
      backgroundColor: cssVar(accessoryStencil.vars.tileBackground),
      [systemIconStencil.vars.color]: cssVar(accessoryStencil.vars.iconColor),
    },
  }),
  modifiers: {
    type: {
      pdf: {
        [accessoryStencil.vars.iconColor]: system.color.fg.inverse,
        [accessoryStencil.vars.tileBackground]: system.legacy.color.accent.danger,
      },
      spreadsheet: {
        [accessoryStencil.vars.iconColor]: system.color.fg.inverse,
        [accessoryStencil.vars.tileBackground]: system.legacy.color.accent.success,
      },
      document: {
        [accessoryStencil.vars.iconColor]: system.color.fg.inverse,
        [accessoryStencil.vars.tileBackground]: system.legacy.color.accent.info,
      },
      presentation: {
        [accessoryStencil.vars.iconColor]: system.color.fg.inverse,
        [accessoryStencil.vars.tileBackground]: system.legacy.color.accent.warning,
      },
      video: {
        [accessoryStencil.vars.iconColor]: system.color.fg.default,
        [accessoryStencil.vars.tileBackground]: system.legacy.color.surface.alt.default,
      },
      file: {
        [accessoryStencil.vars.iconColor]: system.color.fg.default,
        [accessoryStencil.vars.tileBackground]: system.legacy.color.surface.alt.default,
      },
      txt: {
        [accessoryStencil.vars.iconColor]: system.color.fg.default,
        [accessoryStencil.vars.tileBackground]: system.legacy.color.surface.alt.default,
      },
    },
    outline: {
      true: ({iconPart}) => ({
        [iconPart]: {
          borderWidth: px2rem(1),
          borderStyle: 'solid',
          borderColor: system.legacy.color.border.default,
        },
      }),
    },
  },
  defaultModifiers: {
    type: 'file',
  },
});

const fileIcons: Record<AccessoryFileType, SystemIconProps['icon']> = {
  pdf: pdfIcon,
  spreadsheet: tableExpandIcon,
  document: documentIcon,
  presentation: stackIcon,
  video: playCircleIcon,
  file: documentIcon,
  txt: txtIcon,
};

/**
 * `AccessoryFile` renders a file-type tile. `type` chooses the glyph and sets the fill and icon
 * color. Colored types keep their fill at every size. Generic file and text use `surface.alt` and
 * a `border.default` stroke. Always decorative.
 */
export const AccessoryFile = createComponent('span')({
  displayName: 'AccessoryFile',
  Component: (
    {type = 'file', size = 'extraLarge', color, background, ...elemProps}: AccessoryFileProps,
    ref,
    Element
  ) => {
    return (
      <Accessory
        as={Element}
        ref={ref}
        background={background}
        color={color}
        size={size}
        {...handleCsProp(
          elemProps,
          accessoryFileStencil({type, outline: type === 'file' || type === 'txt'})
        )}
      >
        <SystemIcon icon={fileIcons[type]} {...accessoryStencil.parts.icon} aria-hidden={true} />
      </Accessory>
    );
  },
});
