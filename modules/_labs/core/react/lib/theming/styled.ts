import {default as emotionStyled, CreateStyled, Interpolation} from '@emotion/styled';
import {CanvasTheme, useTheme} from './';

// Pulled from https://github.com/emotion-js/emotion/blob/master/packages/styled-base/src/utils.js#L6 (not exported)
type Interpolations = Array<any>;

function styled<Props>(node: any) {
  return (...args: Interpolation<Props>[]) => {
    const newArgs: Interpolations = args.map(
      interpolation => (props: Props & {theme: CanvasTheme}) => {
        props.theme = useTheme(props.theme);

        if (typeof interpolation === 'function') {
          return interpolation(props);
        }
        return interpolation;
      }
    );

    return emotionStyled(node)(newArgs);
  };
}

export default styled as CreateStyled<CanvasTheme>;
