import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import README from './README.md';
import './index.scss';
import './stories.scss';

storiesOf('CSS/Errors and Alerts', module)
  .addDecorator(withReadme(README))
  .add('All', () => (
    <div className="story">
      <div>
        {/* Chinese - Simplified (Low Count) */}
        <section>
          <a className="wdc-alert-bar wdc-alert-bar-error" href="#">
            <span className="wdc-alert-bar-text">24错误和12警报</span>
            <span className="wdc-alert-bar-link">查看全部</span>
          </a>

          <a className="wdc-alert-bar" href="#">
            <span className="wdc-alert-bar-text">10条警报</span>
            <span className="wdc-alert-bar-link">查看全部</span>
          </a>
        </section>

        <section>
          <a className="wdc-alert-bar wdc-alert-bar-error wdc-alert-bar-mini" href="#">
            <span className="wdc-alert-bar-text">24错误和12警报</span>
          </a>

          <a className="wdc-alert-bar wdc-alert-bar-mini" href="#">
            <span className="wdc-alert-bar-text">10条警报</span>
          </a>
        </section>

        {/* English (Average Count) */}
        <section>
          <a className="wdc-alert-bar wdc-alert-bar-error" href="#">
            <span className="wdc-alert-bar-text">24 Errors and 12 Alerts</span>
            <span className="wdc-alert-bar-link">View All</span>
          </a>

          <a className="wdc-alert-bar" href="#">
            <span className="wdc-alert-bar-text">10 Alerts</span>
            <span className="wdc-alert-bar-link">View All</span>
          </a>
        </section>

        <section>
          <a className="wdc-alert-bar wdc-alert-bar-error wdc-alert-bar-mini" href="#">
            <span className="wdc-alert-bar-text">24 Errors and 12 Alerts</span>
          </a>

          <a className="wdc-alert-bar wdc-alert-bar-mini" href="#">
            <span className="wdc-alert-bar-text">10 Alerts</span>
          </a>
        </section>

        {/* Thai (High Count) */}
        <section>
          <a className="wdc-alert-bar wdc-alert-bar-error" href="#">
            <span className="wdc-alert-bar-text">ข้อผิดพลาด 24 และการแจ้งเตือน 12 รายการ</span>
            <span className="wdc-alert-bar-link">ดูทั้งหมด</span>
          </a>

          <a className="wdc-alert-bar" href="#">
            <span className="wdc-alert-bar-text">12 การแจ้งเตือน</span>
            <span className="wdc-alert-bar-link">ดูทั้งหมด</span>
          </a>
        </section>

        <section>
          <a className="wdc-alert-bar wdc-alert-bar-error wdc-alert-bar-mini" href="#">
            <span className="wdc-alert-bar-text">ข้อผิดพลาด 24 และการแจ้งเตือน 12 รายการ</span>
          </a>

          <a className="wdc-alert-bar wdc-alert-bar-mini" href="#">
            <span className="wdc-alert-bar-text">12 การแจ้งเตือน</span>
          </a>
        </section>
      </div>
    </div>
  ));
