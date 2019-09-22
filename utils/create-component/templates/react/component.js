module.exports = pascalCaseName => `
import * as React from 'react'

export default class ${pascalCaseName} extends React.Component {
  public render() {
    return (
      <div>
        ${pascalCaseName}
      </div>
    )
  }
}
`;
