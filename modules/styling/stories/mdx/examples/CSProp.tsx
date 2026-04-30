import {Card} from '@workday/canvas-kit-react/card';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const myStencil = createStencil({
  base: {
    maxWidth: px2rem(400),
    padding: '0',
    overflow: 'hidden',
  },
});

export const CSProp = () => {
  return (
    <Card cs={myStencil()}>
      <Card.Heading
        cs={{
          color: system.color.fg.inverse,
          background: system.color.brand.accent.primary,
          padding: system.padding.sm,
        }}
      >
        The Future of Styling
      </Card.Heading>
      <Card.Body cs={{padding: system.padding.md}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas blandit consectetur.
        Nam in congue mauris. Ut non metus a arcu rutrum accumsan. Duis luctus, diam vitae iaculis
        semper, nibh nisl varius erat, vitae dapibus velit lacus blandit tellus. Aenean vestibulum
        porta lectus non mollis. Quisque in lacus vitae sem vulputate rutrum. Sed dapibus aliquam
        dui, eu aliquam purus egestas eu.
      </Card.Body>
    </Card>
  );
};
