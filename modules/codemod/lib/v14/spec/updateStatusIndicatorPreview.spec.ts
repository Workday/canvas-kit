import {expectTransformFactory} from './expectTransformFactory';
import transform from '../updateStatusIndicatorPreview';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('updateStatusIndicatorPreview', () => {
  it('update `variant` prop when using slash imports', () => {
    const input = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'
      <>
        <StatusIndicator variant="blue">
          <StatusIndicator.Label>Blue</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="green">
          <StatusIndicator.Label>Green</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="orange">
          <StatusIndicator.Label>Orange</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="red">
          <StatusIndicator.Label>Red</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="gray">
          <StatusIndicator.Label>Gray</StatusIndicator.Label>
        </StatusIndicator>
      </>
      `;

    const expected = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'
      <>
        <StatusIndicator variant="info">
          <StatusIndicator.Label>Blue</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="positive">
          <StatusIndicator.Label>Green</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="caution">
          <StatusIndicator.Label>Orange</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="critical">
          <StatusIndicator.Label>Red</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="neutral">
          <StatusIndicator.Label>Gray</StatusIndicator.Label>
        </StatusIndicator>
      </>
    `;
    expectTransform(input, expected);
  });

  it('update `variant` prop when using package imports', () => {
    const input = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react'
      <>
        <StatusIndicator variant="blue">
          <StatusIndicator.Label>Blue</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="green">
          <StatusIndicator.Label>Green</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="orange">
          <StatusIndicator.Label>Orange</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="red">
          <StatusIndicator.Label>Red</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="gray">
          <StatusIndicator.Label>Gray</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="transparent">
          <StatusIndicator.Label>Transparent</StatusIndicator.Label>
        </StatusIndicator>
      </>
      `;

    const expected = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react'
      <>
        <StatusIndicator variant="info">
          <StatusIndicator.Label>Blue</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="positive">
          <StatusIndicator.Label>Green</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="caution">
          <StatusIndicator.Label>Orange</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="critical">
          <StatusIndicator.Label>Red</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="neutral">
          <StatusIndicator.Label>Gray</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="transparent">
          <StatusIndicator.Label>Transparent</StatusIndicator.Label>
        </StatusIndicator>
      </>
    `;
    expectTransform(input, expected);
  });

  it('update `variant` prop when using slash imports', () => {
    const input = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'
      <>
        <StatusIndicator variant={'blue'}>
          <StatusIndicator.Label>Blue</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant={'green'}>
          <StatusIndicator.Label>Green</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant={'orange'}>
          <StatusIndicator.Label>Orange</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant={'red'}>
          <StatusIndicator.Label>Red</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant={'gray'}>
          <StatusIndicator.Label>Gray</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant={'transparent'}>
          <StatusIndicator.Label>Transparent</StatusIndicator.Label>
        </StatusIndicator>
      </>
      `;

    const expected = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator'
      <>
        <StatusIndicator variant="info">
          <StatusIndicator.Label>Blue</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="positive">
          <StatusIndicator.Label>Green</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="caution">
          <StatusIndicator.Label>Orange</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="critical">
          <StatusIndicator.Label>Red</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="neutral">
          <StatusIndicator.Label>Gray</StatusIndicator.Label>
        </StatusIndicator>
        <StatusIndicator variant="transparent">
          <StatusIndicator.Label>Transparent</StatusIndicator.Label>
        </StatusIndicator>
      </>
    `;
    expectTransform(input, expected);
  });

  it('should not update `variant` prop on the main StatusIndicator component', () => {
    const input = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator'
      <>
        <StatusIndicator label="unpublished" type={StatusIndicator.Type.Gray} />
      </>
    `;

    const expected = stripIndent`
      import {StatusIndicator} from '@workday/canvas-kit-react/status-indicator'
      <>
        <StatusIndicator label="unpublished" type={StatusIndicator.Type.Gray} />
      </>
    `;
    expectTransform(input, expected);
  });
});
