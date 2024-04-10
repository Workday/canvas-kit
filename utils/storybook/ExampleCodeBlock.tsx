import * as React from 'react';
import {Canvas, Story, Source, SourceState} from '@storybook/blocks';

export const ExampleCodeBlock = ({of: story, name}: any) => {
  const isOpened = story?.parameters?.source?.isOpened || false;

  console.log(story, name);

  const [open, setOpen] = React.useState(isOpened);
  const expandedClassName = open ? ' example-code-block--expanded' : '';

  return (
    <div className={'example-code-block' + expandedClassName}>
      <div style={{position: 'relative'}}>
        <Canvas withSource={SourceState.NONE}>
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
