// CSS stories template

module.exports = storyPath => `
import React from 'react'
import { storiesOf } from '@storybook/react'
import withReadme from 'storybook-readme/with-readme'
import README from './README.md'
import './index.scss'

storiesOf('${storyPath}', module)
	.addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
    </div>
  ))
`;
