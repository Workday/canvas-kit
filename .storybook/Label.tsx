import React from 'react';

const flexStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  justifyContent: 'space-between',
  paddingInlineEnd: '16px',
};

const deprecatedBoxStyles = {
  padding: '0 8px',
  //   backgroundColor: 'rgba(219, 225, 233, 1)',
  //   color: 'rgba(93, 103, 117, 1)1)',
  backgroundColor: 'rgba(255, 243, 168, 1)',
  color: 'rgba(174, 85, 0, 1)',
  borderRadius: '40px',
  fontSize: '12px',
  fontWeight: 'bold',
};

export const Label = item => {
  if (item.name.endsWith('(deprecated)')) {
    return (
      <div style={flexStyles}>
        <span>{item.name.replace('(deprecated)', '')}</span>
        <span style={deprecatedBoxStyles}>Deprecated</span>
      </div>
    );
  }

  return name;
};
