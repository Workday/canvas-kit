import {expectTransformFactory} from './expectTransformFactory';
import transform from '../updateSegmentedControl';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('SegmentedControl', () => {
  it('should rename IconButton to SegmentedControl.Button', () => {
    const input = stripIndent`
        import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
        
        <SegmentedControl>
            <IconButton icon={listViewIcon} aria-label="List View" value="list-view" />
            <IconButton icon={worksheetsIcon} aria-label="Table view" value="table-view" />
        </SegmentedControl>
    `;

    const expected = stripIndent`
        import {SegmentedControl} from '@workday/canvas-kit-react/segmented-control';
        
        <SegmentedControl>
            <SegmentedControl.Button icon={listViewIcon} aria-label="List View" value="list-view" />
            <SegmentedControl.Button icon={worksheetsIcon} aria-label="Table view" value="table-view" />
        </SegmentedControl>
    `;
    expectTransform(input, expected);
  });
});
