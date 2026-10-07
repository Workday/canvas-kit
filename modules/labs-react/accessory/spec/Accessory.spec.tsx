import {fireEvent, render, screen} from '@testing-library/react';
import * as React from 'react';

import {checkIcon, playCircleIcon} from '@workday/canvas-system-icons-web';

import {Accessory} from '../lib/Accessory';
import {AccessoryCalendar} from '../lib/AccessoryCalendar';
import {AccessoryFile} from '../lib/AccessoryFile';
import {AccessoryIcon} from '../lib/AccessoryIcon';
import {AccessoryMedia} from '../lib/AccessoryMedia';

const imageSrc =
  'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg"/>');

describe('Accessory', () => {
  verifyComponent(Accessory, {});
  verifyComponent(AccessoryIcon, {props: {icon: checkIcon}});
  verifyComponent(AccessoryMedia, {props: {src: imageSrc, alt: 'Preview', icon: checkIcon}});
  verifyComponent(AccessoryFile, {});
  verifyComponent(AccessoryCalendar, {props: {month: 'Apr', date: 30}});

  describe('when a calendar date is rendered', () => {
    it('should show the month and day', () => {
      const {container} = render(<AccessoryCalendar date={30} month="Apr" />);

      expect(container).toHaveTextContent('Apr');
      expect(container).toHaveTextContent('30');
      expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
    });
  });

  describe('when an icon is rendered', () => {
    it('should hide the accessory from assistive technology', () => {
      const {container} = render(<AccessoryIcon icon={checkIcon} />);

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
      expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('when media has loaded', () => {
    it('should keep the image decorative and show the photo', () => {
      const {container} = render(<AccessoryMedia alt="Four dark spheres" src={imageSrc} />);
      const img = container.querySelector('img')!;

      fireEvent.load(img);

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
      expect(img).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('when media has an icon', () => {
    it('should keep the image and icon decorative', () => {
      const {container} = render(
        <AccessoryMedia alt="Team photo" icon={checkIcon} objectFit="contain" src={imageSrc} />
      );

      fireEvent.load(container.querySelector('img')!);

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('when a file type is rendered', () => {
    it('should hide the accessory from assistive technology', () => {
      const {container} = render(<AccessoryFile type="pdf" />);

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });

  describe('when media has a play icon', () => {
    it('should keep the preview and play icon decorative', () => {
      const {container} = render(
        <AccessoryMedia alt="Product demo" icon={playCircleIcon} src={imageSrc} />
      );

      fireEvent.load(container.querySelector('img')!);

      expect(screen.queryByRole('img')).not.toBeInTheDocument();
      expect(container.querySelector('svg')).toBeInTheDocument();
    });
  });
});
