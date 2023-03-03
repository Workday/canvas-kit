import React from 'react';
import styled from '@emotion/styled';

import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {useDialogModel, Dialog} from '@workday/canvas-kit-react/dialog';
import {CanvasColor, colors, space, type} from '@workday/canvas-kit-react/tokens';

import {MDX, MdxJSToJSX} from './MDXElements';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {docs} from './docs';
import {Value} from './Value';
import * as types from '../docgen/docTypes';

/** React context to track the current rendering context to avoid tables inside tables */
export const RenderContext = React.createContext<'table' | 'inline'>('table');
/**
 * React context to track the current heading level. This is useful to relatively change heading
 * levels of a subtree
 */
export const HeadingLevelContext = React.createContext(3);

/**
 * React context to keep track of the current indent level
 */
export const IndentLevelContext = React.createContext(0);

/**
 * Utility function for getting non-breaking space for code formatting. It will print a string of
 * non-breaking spaces according to the level provided. These characters are safe for a React render
 * function.
 */
export function indent(level: number) {
  return [...Array(level * 2)].map(v => '\u00A0').join('');
}

export function capitalize(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

interface HeadingProps {
  headingOffset?: number;
}
/**
 * Special heading component that uses @mdx-js/react heading components, but is also aware of
 * relative heading levels.
 */
export const Heading = createComponent('h4')({
  displayName: 'MDXHeading',
  Component({headingOffset = 0, ...elemProps}: HeadingProps) {
    const headingLevel = React.useContext(HeadingLevelContext);
    const as = `h${headingLevel + headingOffset}` as 'h4'; // Make Typescript happy
    return <MDX as={as} {...elemProps} />;
  },
});

export function renderTypeParameters(typeParameters?: types.TypeParameter[]) {
  return typeParameters && typeParameters.length ? (
    <RenderContext.Provider value="inline">
      <span>&lt;</span>
      {typeParameters.map((p, index) => {
        return (
          <React.Fragment key={index}>
            {index !== 0 && <span className="token punctuation">, </span>}
            <Value value={p} />
          </React.Fragment>
        );
      })}
      <span>&gt;</span>
    </RenderContext.Provider>
  ) : (
    ''
  );
}

const ButtonHyperLink = Hyperlink.as('button');

export interface SymbolDialogProps {
  value: types.SymbolValue;
}

export const SymbolDialog = ({value}: SymbolDialogProps) => {
  const [symbol, setSymbol] = React.useState<types.ExportedSymbol | undefined>(undefined);
  const model = useDialogModel({
    onShow() {
      setSymbol(docs.find(d => value.name === d.name) || undefined);
    },
  });

  return (
    <Dialog model={model}>
      <>
        <Dialog.Target
          as={ButtonHyperLink}
          className="token symbol"
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: 'inherit',
            fontFamily: 'inherit',
          }}
          aria-haspopup="true"
        >
          {value.displayName || value.name}
        </Dialog.Target>
        {renderTypeParameters(value.typeParameters)}
      </>
      <Dialog.Popper>
        <Dialog.Card maxHeight="50vh" maxWidth="90vh">
          <Dialog.CloseIcon />
          <Dialog.Heading>{value.name}</Dialog.Heading>
          <Dialog.Body>
            <RenderContext.Provider value="table">
              <IndentLevelContext.Provider value={0}>
                {symbol ? (
                  <SymbolDoc name={value.name} headingStart={3} hideHeading />
                ) : (
                  <>
                    <p>Basic type information:</p>
                    <pre>
                      <code>{value.value}</code>
                    </pre>
                  </>
                )}
              </IndentLevelContext.Provider>
            </RenderContext.Provider>
          </Dialog.Body>
        </Dialog.Card>
      </Dialog.Popper>
    </Dialog>
  );
};

function createColor(color: CanvasColor) {
  return {
    color: colors[color],
  };
}

const StyledSymbolDoc = styled('div')({
  marginBottom: space.m,
  'button[data-symbol]': {
    border: 'none',
    background: 'transparent',
    fontSize: 'inherit',
    fontFamily: 'inherit',
  },
  code: {
    fontSize: type.properties.fontSizes[14],
    lineHeight: 1.5,
    fontFamily: type.properties.fontFamilies.monospace,
    whiteSpace: 'nowrap',
    '.token': {
      '&.string': createColor('juicyPear600'),
      '&.symbol': createColor('grapeSoda600'),

      '&.property': createColor('berrySmoothie600'),
      '&.primitive': createColor('pomegranate600'),
      '&.number': createColor('pomegranate600'),
      '&.boolean': createColor('pomegranate600'),
      '&.variable': createColor('pomegranate600'),
      '&.keyword': createColor('pomegranate600'),
      '&.punctuation': createColor('blackPepper600'),
      '&.operator': createColor('blackPepper600'),
      '&.bold': {fontWeight: 700},
    },
  },
});

function getSymbolDocChildren(doc?: types.ExportedSymbol, meta?: any) {
  if (!doc) {
    return <div>Not Found</div>;
  }

  if (doc && doc.type) {
    return <Value value={doc.type} doc={doc} meta={meta} />;
  }

  return <div>Not Found</div>;
}

function findDoc({name, fileName}: ValueDocProps): types.ExportedSymbol<types.Value> | undefined {
  const doc = (docs || []).find(d => {
    return d.name === name && (fileName ? d.fileName.includes(fileName) : true);
  });

  if (doc?.type.kind === 'alias') {
    return findDoc({name: doc.type.name});
  }

  return doc;
}

export const useDoc = (criteria: ValueDocProps) => {
  const [doc] = React.useState(() => {
    return findDoc(criteria);
  });

  return doc;
};

export interface ValueDocProps {
  name: string;
  fileName?: string;
}

/**
 * Renders the `<Value>` of a exported symbol without any wrapper. This should be used when nesting
 * inside a `<SymbolDoc>` component.
 */
export const SymbolValue = (props: ValueDocProps) => {
  const doc = useDoc(props);

  return getSymbolDocChildren(doc);
};

/**
 * Renders just the description of an exported symbol.
 */
export const SymbolDescription = (props: ValueDocProps) => {
  const doc = useDoc(props);

  return doc ? <MdxJSToJSX>{doc.description}</MdxJSToJSX> : null;
};

export interface SymbolDocProps extends ValueDocProps, StyledType {
  /**
   * `SymbolDoc` can support heading levels inside widgets. The `headingStart` determines the
   * initial heading level. From there, a React.Context called `HeadingLevelContext` maintains this
   * level to subcomponents. This helps to maintain a document hierarchy of heading levels.
   */
  headingStart?: number;
  /**
   * `SymbolDoc` will render a heading at the provided `headingStart` level unless `hideHeading` is
   * passed.
   */
  hideHeading?: boolean;
  /**
   * `SymbolDoc` will render the `descriptionOverride` if provided or the JSDoc description if
   * found. Setting `hideDescription` will disable this rendering of the description.
   */
  hideDescription?: boolean;
  /**
   * By default, `SymbolDoc` will render the JSDoc description if found. This description can be
   * overridden to display a custom description. This can be useful if you know that the description
   * should be given a specific context of the widget type.
   */
  descriptionOverride?: string;
  meta?: Record<string, any>;
  className?: string;
}

/**
 * Renders an exported symbol as a doc object. This will render JSDoc tags, description and setup
 * rendering contexts for headers.
 */
export const SymbolDoc = ({
  name,
  fileName,
  headingStart = 3,
  hideDescription = false,
  hideHeading = false,
  descriptionOverride,
  meta,
  ...elemProps
}: SymbolDocProps) => {
  const doc = useDoc({name, fileName});

  const children = getSymbolDocChildren(doc, meta);

  const requiresCodeWrapper = [
    'symbol',
    'generic',
    'array',
    'indexedAccess',
    'qualifiedName',
    'parenthesis',
    'typeParameter',
    'keyof',
    'type',
    'conditional',
    'indexSignature',
    'tuple',
    'external',
    'number',
    'string',
    'boolean',
    'primitive',
    'unknown',
    'union',
    'intersection',
    'function',
    'callExpression',
  ].includes(doc?.type.kind || 'notFound');

  const contents = requiresCodeWrapper ? (
    <code style={{display: 'block'}}>{children}</code>
  ) : (
    children
  );

  return (
    <StyledSymbolDoc {...elemProps}>
      <HeadingLevelContext.Provider value={headingStart}>
        {!hideHeading && <Heading>{name}</Heading>}
        {!hideDescription && doc && (
          <MdxJSToJSX>{descriptionOverride || doc.description}</MdxJSToJSX>
        )}
        {contents}
      </HeadingLevelContext.Provider>
    </StyledSymbolDoc>
  );
};
