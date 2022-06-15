import {expectTransformFactory} from './expectTransformFactory';
import transform from '../removeDefaultImports';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('renameIconRefs', () => {
  it('should replace default export with a named export for react package', () => {
    const input = stripIndent`
      import fonts from '@workday/canvas-kit-react-fonts';
      import Toast from '@workday/canvas-kit-react/toast';
      import Canvas from '@workday/canvas-kit-react/tokens';
      import Tooltip from '@workday/canvas-kit-react/tooltip';
      import TextArea from '@workday/canvas-kit-react/text-area';
      import Avatar from '@workday/canvas-kit-react/avatar';
      import CountBadge from '@workday/canvas-kit-react/badge';
      import Checkbox from '@workday/canvas-kit-react/checkbox';
      import FormField from '@workday/canvas-kit-react/form-field';
      import LoadingDots from '@workday/canvas-kit-react/loading-animation';
      import Radio from '@workday/canvas-kit-react/radio';
      import SegmentedControl from '@workday/canvas-kit-react/segmented-control';
      import Select from '@workday/canvas-kit-react/select';
      import SidePanel from '@workday/canvas-kit-react/side-panel';
      import StatusIndicator from '@workday/canvas-kit-react/status-indicator';
      import Switch from '@workday/canvas-kit-react/switch';
      import Table from '@workday/canvas-kit-react/table';
      import TextInput from '@workday/canvas-kit-react/text-input';
    `;

    const expected = stripIndent`
    import { fonts } from '@workday/canvas-kit-react-fonts';
    import { Toast } from '@workday/canvas-kit-react/toast';
    import { Canvas } from '@workday/canvas-kit-react/tokens';
    import { Tooltip } from '@workday/canvas-kit-react/tooltip';
    import { TextArea } from '@workday/canvas-kit-react/text-area';
    import { Avatar } from '@workday/canvas-kit-react/avatar';
    import { CountBadge } from '@workday/canvas-kit-react/badge';
    import { Checkbox } from '@workday/canvas-kit-react/checkbox';
    import { FormField } from '@workday/canvas-kit-react/form-field';
    import { LoadingDots } from '@workday/canvas-kit-react/loading-animation';
    import { Radio } from '@workday/canvas-kit-react/radio';
    import { SegmentedControl } from '@workday/canvas-kit-react/segmented-control';
    import { Select } from '@workday/canvas-kit-react/select';
    import { SidePanel } from '@workday/canvas-kit-react/side-panel';
    import { StatusIndicator } from '@workday/canvas-kit-react/status-indicator';
    import { Switch } from '@workday/canvas-kit-react/switch';
    import { Table } from '@workday/canvas-kit-react/table';
    import { TextInput } from '@workday/canvas-kit-react/text-input';
    `;

    expectTransform(input, expected);
  });
  it('should replace default exports with named imports for labs', () => {
    const input = stripIndent`
      import ComboBox from '@workday/canvas-kit-labs-react/combobox';
      import Drawer from '@workday/canvas-kit-labs-react/drawer';
    `;

    const expected = stripIndent`
      import { ComboBox } from '@workday/canvas-kit-labs-react/combobox';
      import { Drawer } from '@workday/canvas-kit-labs-react/drawer';
    `;
    expectTransform(input, expected);
  });
  it('should replace default exports with named imports for preview', () => {
    const input = stripIndent`
      import Breadcrumbs from '@workday/canvas-kit-preview-react/breadcrumbs';
      import ColorPicker from '@workday/canvas-kit-preview-react/color-picker';
      import Menu from '@workday/canvas-kit-preview-react/menu';
      import Select from '@workday/canvas-kit-preview-react/select';
      import SidePanel from '@workday/canvas-kit-preview-react/side-panel';
    `;

    const expected = stripIndent`
      import { Breadcrumbs } from '@workday/canvas-kit-preview-react/breadcrumbs';
      import { ColorPicker } from '@workday/canvas-kit-preview-react/color-picker';
      import { Menu } from '@workday/canvas-kit-preview-react/menu';
      import { Select } from '@workday/canvas-kit-preview-react/select';
      import { SidePanel } from '@workday/canvas-kit-preview-react/side-panel';
    `;

    expectTransform(input, expected);
  });
});
