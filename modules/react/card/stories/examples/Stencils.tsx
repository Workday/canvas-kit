import * as React from 'react';
import {cardStencil, cardBodyStencil, cardHeadingStencil} from '@workday/canvas-kit-react/card';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStencil, px2rem, CSProps, handleCsProp} from '@workday/canvas-kit-styling';
import {system, brand} from '@workday/canvas-tokens-web';

const menuCardStencil = createStencil({
  extends: cardStencil,
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: system.space.zero,
    maxWidth: px2rem(320),
    boxShadow: system.depth[1],
    overflow: 'hidden',
  },
});

const menuCardHeroStencil = createStencil({
  base: {
    display: 'flex',
    alignItems: 'flex-end',
    background: brand.gradient.primary,
    aspectRatio: '1',
    maxHeight: px2rem(80),
    padding: system.space.x2,
  },
});

const MenuCardHero = createComponent('div')({
  displayName: 'MenuCard.Hero',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardHeroStencil())} />;
  },
});

const menuCardContentStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: system.space.x2,
    padding: system.space.x2,
  },
});

const MenuCardContent = createComponent('div')({
  displayName: 'MenuCard.Content',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardContentStencil())} />;
  },
});

const menuCardHeadingStencil = createStencil({
  extends: cardHeadingStencil,
  base: {
    color: brand.primary.accent,
    margin: system.space.zero,
  },
});

const MenuCardHeading = createComponent('h3')({
  displayName: 'MenuCard.Heading',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardHeadingStencil())} />;
  },
});

const menuCardTextStencil = createStencil({
  extends: cardBodyStencil,
  base: {
    margin: 0,
  },
});

const MenuCardText = createComponent('p')({
  displayName: 'MenuCard.Text',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardTextStencil())} />;
  },
});

const MenuCard = createComponent('div')({
  displayName: 'MenuCard',
  Component: (elemProps: CSProps, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, menuCardStencil())} />;
  },
  subComponents: {
    Content: MenuCardContent,
    Heading: MenuCardHeading,
    Hero: MenuCardHero,
    Text: MenuCardText,
  },
});

export const WithStencils = () => (
  <MenuCard>
    <MenuCard.Hero>
      <MenuCard.Heading>Sausage Pizza</MenuCard.Heading>
    </MenuCard.Hero>
    <MenuCard.Content>
      <MenuCard.Text>
        Red sauce, homemade seasoned sausage, mushrooms, red bell peppers, rosemary, cheese.
      </MenuCard.Text>
      <MenuCard.Text></MenuCard.Text>
    </MenuCard.Content>
  </MenuCard>
);
