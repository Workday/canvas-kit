import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {chartConfigIcon, filterIcon} from '@workday/canvas-system-icons-web';
import README from './README.md';
import './index.scss';

storiesOf('Components/Containers/Table/CSS', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <div>
        <div className="wdc-table-meta">
          <div className="wdc-table-info">
            <span className="wdc-table-name">Data Grid Name</span>
            <span className="wdc-table-row-count">4 Items</span>
          </div>

          <div className="wdc-icon-list">
            <div className="wdc-icon-list-icon" role="button" tabIndex={0}>
              <SystemIcon icon={filterIcon} />
            </div>
            <div className="wdc-icon-list-icon" role="button" tabIndex={0}>
              <SystemIcon icon={chartConfigIcon} />
            </div>
          </div>
        </div>
        <table className="wdc-table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr className="wdc-table-row-hover">
              <td>1</td>
              <td>Aidan Brown</td>
              <td>Product Manager</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Betty Chen</td>
              <td>Product Designer</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr className="wdc-table-row-selected">
              <td>3</td>
              <td>Helen Gonzalez</td>
              <td>Application Developer</td>
              <td>Portland, OR</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Timothy May</td>
              <td>VP, Product Development</td>
              <td>San Francisco, CA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <table className="wdc-table">
          <thead>
            <tr>
              <th className="wdc-table-cell-center" scope="col" id="select-row" />
              <th className="wdc-table-cell-right" scope="col">
                ID
              </th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox1"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox1" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">1</td>
              <td>Aidan Brown</td>
              <td>
                Product Manager <br />
                <br /> On multiple lines
              </td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox2"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox2" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">2</td>
              <td>Betty Chen</td>
              <td>Product Designer</td>
              <td>San Francisco, CA</td>
            </tr>
            <tr>
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox3"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox3" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">3</td>
              <td>Helen Gonzalez</td>
              <td>Application Developer</td>
              <td>Portland, OR</td>
            </tr>
            <tr>
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox4"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox4" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">4</td>
              <td>Timothy May</td>
              <td>VP, Product Development</td>
              <td>San Francisco, CA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ))
  .add('Errors', () => (
    <div className="story">
      <div>
        <table className="wdc-table">
          <thead>
            <tr>
              <th className="wdc-table-cell-center" scope="col" id="select-row" />
              <th className="wdc-table-cell-right" scope="col">
                ID
              </th>
              <th scope="col" id="name-heading">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="wdc-table-row-alert">
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox1"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox1" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">1</td>
              <td>
                <input
                  type="text"
                  className="wdc-form-textinput"
                  value="Aidan Brown"
                  aria-labelledby="name-heading"
                />
              </td>
            </tr>
            <tr>
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox2"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox2" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">2</td>
              <td>
                <input
                  type="text"
                  className="wdc-form-textinput"
                  value="Betty Chen"
                  aria-labelledby="name-heading"
                />
              </td>
            </tr>
            <tr className="wdc-table-row-error">
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox3"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox3" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">3</td>
              <td>
                <input
                  type="text"
                  className="wdc-form-textinput"
                  value="Helen Gonzalez"
                  aria-labelledby="name-heading"
                />
              </td>
            </tr>
            <tr>
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox4"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox4" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">4</td>
              <td>
                <input
                  type="text"
                  className="wdc-form-textinput"
                  value="Timothy May"
                  aria-labelledby="name-heading"
                />
              </td>
            </tr>
            <tr className="wdc-table-row-alert-borderless">
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox5"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox5" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">5</td>
              <td>
                <input
                  type="text"
                  className="wdc-form-textinput wdc-form-alert"
                  value="Alex Black"
                  aria-labelledby="name-heading"
                />
              </td>
            </tr>
            <tr>
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox6"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox6" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">6</td>
              <td>
                <input
                  type="text"
                  className="wdc-form-textinput"
                  value="Catherine Jackson"
                  aria-labelledby="name-heading"
                />
              </td>
            </tr>
            <tr className="wdc-table-row-error-borderless">
              <td className="wdc-table-cell-center">
                <div className="wdc-form-checkbox-nolabel">
                  <input
                    type="checkbox"
                    className="wdc-form-checkbox"
                    id="checkbox7"
                    aria-labelledby="select-row"
                  />
                  <label htmlFor="checkbox7" className="wdc-form-label" />
                </div>
              </td>
              <td className="wdc-table-cell-right">7</td>
              <td>
                <input
                  type="text"
                  className="wdc-form-textinput wdc-form-error"
                  value="Emily Li"
                  aria-labelledby="name-heading"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ));
