import {ComponentValue} from '../../docgen/plugins/customTypes';
import {PropertiesTable, registerWidget} from '../Value';
import {Heading} from '../widgetUtils';

registerWidget<ComponentValue>('component', ({value, doc, meta}) => {
  return (
    <>
      <Heading id={`${value.displayName?.toLowerCase()}-props-api`} headingOffset={1}>
        Props
      </Heading>
      <PropertiesTable properties={value.props}></PropertiesTable>
    </>
  );
});
