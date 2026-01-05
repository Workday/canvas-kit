import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteAvatar';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Promote Avatar to main package', () => {
  describe('Component package import', () => {
    it('should not transform Avatar from other imports', () => {
      const input = stripIndent`
          import { Avatar } from "@other-package";
        `;

      const expected = stripIndent`
          import { Avatar } from "@other-package";
        `;

      expectTransform(input, expected);
    });

    it('should not transform other preview imports', () => {
      const input = stripIndent`
          import { SegmentedControl } from "@workday/canvas-kit-preview-react/segmented-control";
          import { Pill } from "@workday/canvas-kit-preview-react/pill";
        `;

      const expected = input;

      expectTransform(input, expected);
    });

    it('should properly transform preview import for Avatar to react Avatar', () => {
      const input = stripIndent`
          import { Avatar } from "@workday/canvas-kit-preview-react/avatar";
        `;

      const expected = stripIndent`
          import { Avatar } from "@workday/canvas-kit-react/avatar";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform preview import for Avatar to react Avatar from main packages', () => {
      const input = stripIndent`
          import { Avatar } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Avatar } from "@workday/canvas-kit-react/avatar";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named preview import for Avatar only to react Avatar', () => {
      const input = stripIndent`
          import { Avatar as CanvasAvatar } from "@workday/canvas-kit-preview-react/avatar";
        `;

      const expected = stripIndent`
          import { Avatar as CanvasAvatar } from "@workday/canvas-kit-react/avatar";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform all Avatar-related exports from preview', () => {
      const input = stripIndent`
          import { Avatar, BaseAvatar, AvatarImage, AvatarName, getInitialsFromName } from "@workday/canvas-kit-preview-react/avatar";
        `;

      const expected = stripIndent`
          import { Avatar, BaseAvatar, AvatarImage, AvatarName, getInitialsFromName } from "@workday/canvas-kit-react/avatar";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform Avatar stencil exports from preview', () => {
      const input = stripIndent`
          import { avatarStencil, baseAvatarStencil, avatarImageStencil, avatarNameStencil } from "@workday/canvas-kit-preview-react/avatar";
        `;

      const expected = stripIndent`
          import { avatarStencil, baseAvatarStencil, avatarImageStencil, avatarNameStencil } from "@workday/canvas-kit-react/avatar";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform Avatar props types from preview', () => {
      const input = stripIndent`
          import { AvatarProps, BaseAvatarProps, AvatarImageProps, AvatarNameProps } from "@workday/canvas-kit-preview-react/avatar";
        `;

      const expected = stripIndent`
          import { AvatarProps, BaseAvatarProps, AvatarImageProps, AvatarNameProps } from "@workday/canvas-kit-react/avatar";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main preview import for Avatar to react Avatar', () => {
      const input = stripIndent`
          import { Avatar } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Avatar } from "@workday/canvas-kit-react/avatar";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main preview import for Avatar only to react Avatar', () => {
      const input = stripIndent`
          import { Avatar as CanvasAvatar } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Avatar as CanvasAvatar } from "@workday/canvas-kit-react/avatar";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main preview import for Avatar only to react Avatar', () => {
      const input = stripIndent`
          import {Avatar, Pill} from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Avatar } from "@workday/canvas-kit-react/avatar";
          import { Pill } from "@workday/canvas-kit-preview-react";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform multiple Avatar exports from main preview package', () => {
      const input = stripIndent`
          import {Avatar, BaseAvatar, getInitialsFromName, Pill} from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Avatar, BaseAvatar, getInitialsFromName } from "@workday/canvas-kit-react/avatar";
          import { Pill } from "@workday/canvas-kit-preview-react";
        `;

      expectTransform(input, expected);
    });
  });
});
