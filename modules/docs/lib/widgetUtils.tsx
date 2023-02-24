import React from 'react';
import styled from '@emotion/styled';

import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {useDialogModel, Dialog} from '@workday/canvas-kit-react/dialog';
import {CanvasColor, colors, type} from '@workday/canvas-kit-react/tokens';

import {MDX, MdxJSToJSX} from './MDXElements';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {docs} from './docs';
import {Value} from './Value';
import * as types from '../docgen/docTypes';
import {fontSizes} from '@workday/canvas-kit-react/tokens/lib/type/fontSizes';

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
export function space(level: number) {
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
  hideDescription?: boolean;
}

export const SymbolDialog = ({value, hideDescription}: SymbolDialogProps) => {
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
          <Dialog.Heading>
            <>
              {value.name}
              {/* {renderTypeParameters(symbol?.type.typeParameters)} */}
            </>
          </Dialog.Heading>
          <Dialog.Body>
            <RenderContext.Provider value="table">
              <IndentLevelContext.Provider value={0}>
                {symbol ? (
                  <>
                    <SymbolDoc
                      name={value.name}
                      headingStart={3}
                      hideDescription={hideDescription}
                      meta={{hideHeader: true}}
                    />
                  </>
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
  'button[data-symbol]': {
    border: 'none',
    background: 'transparent',
    fontSize: 'inherit',
    fontFamily: 'inherit',
  },
  code: {
    fontSize: fontSizes[14],
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
  headingStart?: number;
  className?: string;
  hideDescription?: boolean;
  meta?: Record<string, any>;
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
        {!hideDescription && doc && <MdxJSToJSX>{doc.description}</MdxJSToJSX>}
        {contents}
      </HeadingLevelContext.Provider>
    </StyledSymbolDoc>
  );
};
