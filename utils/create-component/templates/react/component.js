module.exports = pascalCaseName => `
import * as React from 'react'
import styled from 'react-emotion';

export interface ${pascalCaseName}Props extends React.HTMLAttributes<HTMLDivElement> {

}

const Container = styled('div')<${pascalCaseName}Props>({

});

export default class ${pascalCaseName} extends React.Component<${pascalCaseName}Props, {}> {
  public render() {
    const {...elemProps} = this.props;

    return (
      <Container {...elemProps}>
        ${pascalCaseName}
      </Container>
    )
  }
}
`;
