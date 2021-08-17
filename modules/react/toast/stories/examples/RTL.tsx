import * as React from 'react';
import Toast from '../../index';
import {ContentDirection, StaticStates} from '../../../common';

export const RTL = () => {
  const handleClose = () => {
    console.log('close button clicked');
  };
  return (
    <StaticStates theme={{canvas: {direction: ContentDirection.RTL}}}>
      <Toast onClose={handleClose}>Your workbook was successfully processed.</Toast>
    </StaticStates>
  );
};
