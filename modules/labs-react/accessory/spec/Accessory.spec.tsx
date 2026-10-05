import {render, screen} from '@testing-library/react';
import * as React from 'react';

import {checkIcon} from '@workday/canvas-system-icons-web';

import {Accessory} from '../lib/Accessory';

const imageSrc =
  'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg"/>');

describe('Accessory', () => {
  verifyComponent(Accessory, {});
  verifyComponent(Accessory.Icon, {props: {icon: checkIcon}});
  verifyComponent(Accessory.Image, {props: {src: imageSrc, alt: 'Preview', icon: checkIcon}});

  describe('when the icon has no accessible name', () => {
    it('should hide the icon from assistive technology', () => {
      render(
        <Accessory>
          <Accessory.Icon icon={checkIcon} />
        </Accessory>
      );

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });
  });

  describe('when the icon has an accessible name', () => {
    it('should expose the icon as an image', () => {
      render(
        <Accessory>
          <Accessory.Icon aria-label="Complete" icon={checkIcon} />
        </Accessory>
      );

      expect(screen.getByRole('img', {name: 'Complete'})).toBeInTheDocument();
    });
  });

  describe('when an image has alternative text', () => {
    it('should expose that text as the image name', () => {
      render(
        <Accessory>
          <Accessory.Image alt="Four dark spheres" src={imageSrc} />
        </Accessory>
      );

      expect(screen.getByRole('img', {name: 'Four dark spheres'})).toBeInTheDocument();
    });
  });

  describe('when a custom tile has a background image and an icon', () => {
    it('should name the image and keep the icon decorative', () => {
      render(
        <Accessory>
          <Accessory.Image alt="Team photo" icon={checkIcon} objectFit="contain" src={imageSrc} />
        </Accessory>
      );

      expect(screen.getByRole('img', {name: 'Team photo'})).toBeInTheDocument();
      expect(screen.getAllByRole('img')).toHaveLength(1);
    });
  });

  describe('when a custom tile is decorative', () => {
    it('should hide the image from assistive technology', () => {
      render(
        <Accessory>
          <Accessory.Image alt="" icon={checkIcon} src={imageSrc} />
        </Accessory>
      );

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });
  });

  describe('when an image is decorative', () => {
    it('should hide the image from assistive technology', () => {
      render(
        <Accessory>
          <Accessory.Image alt="" src={imageSrc} />
        </Accessory>
      );

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });
  });
});
