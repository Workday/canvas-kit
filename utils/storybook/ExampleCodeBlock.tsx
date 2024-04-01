import * as React from 'react';
import {Canvas, Story, Source} from '@storybook/blocks';
// import {createStencil} from '@workday/canvas-kit-styling';

export const ExampleCodeBlock = ({of: story, children}: any) => {
  const [open, setOpen] = React.useState(false);
  const expandedClassName = open ? ' example-code-block--expanded' : '';

  return (
    <div className={'example-code-block' + expandedClassName}>
      <div style={{position: 'relative'}}>
        <Canvas withSource="none">
          <Story of={story} />
        </Canvas>
        <div
          style={{
            borderBottomRightRadius: open ? 0 : '4px',
            overflow: 'hidden',
            position: 'absolute',
            bottom: 1,
            right: 1,
            paddingLeft: 4,
          }}
        >
          <button onClick={() => setOpen(!open)} className="docblock-code-toggle">
            {open ? 'Hide' : 'Show'} code
          </button>
        </div>
      </div>
      {open && <Source code={story.render.__RAW__} />}
    </div>
  );
};
