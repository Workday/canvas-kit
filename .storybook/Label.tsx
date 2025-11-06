import React from 'react';

const flexStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  width: '100%',
  justifyContent: 'space-between',
  paddingInlineEnd: '16px',
};

const boxStyles = {
  padding: '0 8px',
  borderRadius: '40px',
  fontSize: '12px',
  fontWeight: 'bold',
  marginTop: '2px',
  textTransform: 'capitalize',
} as const;

const getType = (name: string) => {
  return name.match(/\((?<type>.*)\)$/)?.groups?.type;
};

const getColors = (type: string) => {
  switch (type.toLowerCase()) {
    case 'ai':
      return {
        backgroundColor: 'rgba(207, 235, 255, 1)',
        color: 'rgba(2, 32, 67, 1)',
      };
    case 'deprecated':
      return {
        backgroundColor: 'rgba(234, 237, 240, 1)',
        color: 'rgba(77, 86, 98, 1)',
      };
    default:
      return {
        backgroundColor: 'rgba(227, 241, 255, 1)',
        color: 'rgba(0, 87, 174, 1)',
      };
  }
};

export const Label = item => {
  const type = getType(item.name);

  if (type) {
    return (
      <div className="sb-unstyled" style={flexStyles}>
        <span>{item.name.replace(`(${type})`, '')}</span>
        <span style={{...boxStyles, ...getColors(type)}}>{type}</span>
      </div>
    );
  }

  return name;
};
