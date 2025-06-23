import {typeProps} from '../mapping/typeProps';

export const generateLevelTokens = ([level, size]: string[]) => {
  const isHeadingStyle = ['heading', 'title'].includes(level);
  return typeProps.reduce((acc: {[key in (typeof typeProps)[number]]?: string}, prop) => {
    switch (prop) {
      case 'color':
        acc.color = `system.color.fg.${isHeadingStyle ? 'strong' : 'default'}`;
        break;
      case 'fontWeight':
        acc.fontWeight = `system.fontWeight.${isHeadingStyle ? 'bold' : 'regular'}`;
        break;
      case 'fontFamily':
        acc.fontFamily = 'system.fontFamily.default';
        break;
      default:
        acc[prop] = `system.${prop}.${level}.${size}`;
    }
    return acc;
  }, {});
};
