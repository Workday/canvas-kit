import {storiesOf} from '@storybook/react';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {xIcon} from '@workday/canvas-system-icons-web';
import './index.scss';
import './../button/index.scss';
import {styled} from '@workday/canvas-kit-react/common';
import {colors, type} from '@workday/canvas-kit-react/tokens';

const StyledHeader = styled('h3')({
  ...type.levels.body.large,
  color: colors.licorice500,
  fontWeight: type.properties.fontWeights.bold,
  marginBottom: '18px;',
});

storiesOf('Components/Popups/Tooltip/CSS', module)
  .addParameters({ReadmePath: 'css/tooltip'})
  .add('Default', () => (
    <div className="story">
      <div>
        <StyledHeader>Hover over the icon.</StyledHeader>
        <div className="wdc-tooltip-container">
          <button className="wdc-btn-icon-circle" aria-describedby="tooltip">
            <SystemIcon icon={xIcon} />
          </button>
          <div className="wdc-tooltip wdc-tooltip-top" id="tooltip">
            Close
          </div>
        </div>
      </div>
    </div>
  ));
