/* eslint-disable react-hooks/rules-of-hooks */
import {breakpoints} from '@workday/canvas-kit-react/common';

// export const ref = React.useRef(null);
// export const [width, setWidth] = React.useState(0);
// const contWidth = () => {
//   const newWidth = ref?.current?.offsetWidth;
//   setWidth(newWidth);
// };
// React.useEffect(() => {
//   contWidth();
// }, []);
// React.useEffect(() => {
//   contWidth();
//   window.addEventListener('resize', contWidth);
// }, []);

// useResizeObserver({
//   ref: ref,
//   onResize: data => {
//     setWidth(data.width || 0);
//   },
// });

const useContainer = (containerWidth: Number) => {
  const resPoints = {
    zero: breakpoints.zero,
    isSm: breakpoints.s,
    isMd: breakpoints.m,
    isLg: breakpoints.l,
    isXl: breakpoints.xl,
    active: 'zero',
  };
  /* eslint-disable curly */
  if (containerWidth > resPoints.zero && containerWidth < resPoints.isSm) resPoints.active = 'zero';
  if (containerWidth >= resPoints.isSm && containerWidth < resPoints.isMd) resPoints.active = 'sm';
  if (containerWidth >= resPoints.isMd && containerWidth < resPoints.isLg) resPoints.active = 'md';
  if (containerWidth >= resPoints.isLg && containerWidth < resPoints.isXl) resPoints.active = 'lg';
  if (containerWidth >= resPoints.isXl) resPoints.active = 'xl';
  return resPoints;
};

export const useContainerValues = (
  breakpointValues: {[x: string]: any},
  containerWidth: Number
) => {
  const {active} = useContainer(containerWidth);
  return breakpointValues[active];
};
