import ts from 'typescript';

export type TransformerContext = {
  checker: ts.TypeChecker;
  prefix: string;
  getPrefix: (path: string) => string;
  /**
   * Name and value pairs for things that cannot be statically resolved via the type system. The
   * name is resolved via `getPropertyAccessExpressionText` and the value can be anything. It should
   * be whatever you want the runtime value to be, which is usually a hash. For example:
   *
   * ```ts
   * const myVars = createVars('color');
   *
   * color: myVars.color
   * ```
   *
   * The type of `myVars.color` is `string`, but both in runtime and transpile time, the
   * `myVars.color` is resolved to a hard value. The `names` cache is a lookup to that value. The
   * `names` cache does not track the AST of `color`, so `const {color} = myVars` will not work. The
   * key comes from `getPropertyAccessExpressionText` which replaces `.` with `-`.
   */
  names: Record<string, string>;
  /**
   * Extracted names is a mapping from `names` to a value that will be output to CSS. If you add an
   * entry to `names`, add an entry to `extractedNames` where the `key` of `extractedNames` is the
   * `value` of `names`.
   *
   * For example:
   * ```ts
   * // names
   * { "myVars.foo": "--css-12345" },
   * // extractedNames
   * { "--css-12345": "--css-my-vars-foo" }
   * ```
   *
   * The value in `names` will be used for transformation of TypeScript files into JavaScript files.
   * The `extractedNames` will be used for the output CSS files.
   */
  extractedNames: Record<string, string>;
  /**
   * Variable scoping allows for a variable lookup to match a predefined scope. For example, in
   * stencils, the `base` config can take a function with the locally defined variable names.
   *
   * ```ts
   * const myStencil = createStencil({
   *   vars: {color: 'red'},
   *   base({color}) {
   *     return {
   *       [color]: 'blue'
   *     }
   *   }
   * })
   * ```
   *
   * In this case, a name lookup would fail because there's no global name named `color`. There's a
   * global name named `my-color` which is the fully-qualified name. The stencil parser will add
   * `my-` as a name scoping when processing style attributes for name lookup purposes.
   */
  nameScope?: string;
  /**
   * All styles will be collected here. These styles will then be flushed out to CSS files according
   * to the `getFileName` function.
   */
  styles: StylesOutput;
  /**
   * The cache is for idempotent style inserts. Styles are hashed based on file name and position in
   * the file.
   */
  cache: Record<string, string>;
  getFileName: (path: string) => string;
  objectTransforms: ObjectTransform[];
  propertyTransforms: PropertyTransform[];
  fileName: string;
  transform: NodeTransformer;
  extractCSS: boolean;
  seed: string;
};

export type NestedStyleObject = {[key: string]: number | string | NestedStyleObject};

/**
 * Transformer function type. A transformer will be called by the TypeScript AST transformer visitor
 * from the bottom of the tree to the top (inside-out/leaf first, root last). If a transformer knows
 * how to handle the AST node, a node should be returned. Even if no transformation is desired,
 * returning a node shortcuts processing. The visitor will call all NodeTransformers until a match
 * is met.
 */
export type NodeTransformer = (node: ts.Node, context: TransformerContext) => ts.Node | void;

/**
 * Used to collect styles. The format will be:
 *
 * ```js
 * {
 *   '/absolute/file/name': [
 *     '.styles-1 { ... }'
 *   ]
 * }
 * ```
 */
export type StylesOutput = Record<string, string[]>;

export interface Config {
  /**
   * The prefix for all CSS class names and variables. This should be something short and
   * distinguish your CSS class names from others on the page.
   */
  prefix?: string;
  /**
   * If you wish to automatically include CSS variable fallbacks, you can provide paths to CSS files
   * that contain CSS variables. Fallbacks are useful if you expect your CSS to be loaded in an
   * environment that might not include these CSS files. An example might be Storybook or other dev
   * environments where you want your CSS to look good even in these environments. Fallbacks make
   * bigger files because fallbacks are embedded.
   *
   * For example:
   * ```ts
   * const myComponent = createStyles({
   *   color: '--primary-color-100'
   * })
   * ```
   *
   * If you provide a fallback file that defines `--primary-color-100`, the fallback will be
   * inlined:
   * ```css
   * // without
   * .my-component{color:var(--primary-color-100);}
   *
   * // with fallback
   * .my-component{color:var(--primary-color-100,#0000ff);}
   * ```
   *
   * The benefit is your CSS will work even without the files that define all your global CSS
   * variables.
   */
  fallbackFiles?: string[];
  /**
   * Optional additional transforms. A transform takes an AST node and optionally returns a new AST
   * node. This is useful if your source files use custom utility functions. The style
   * transformation process must receive static strings while reading your source files. The base
   * transformers handle all style utilities provided by `@workday/canvas-kit-styling`, but you may
   * use more. The transformer makes use of TypeScript's type checker to extract a static types out
   * of variables, but will throw errors if it finds a generic type like `string` or `number`. If
   * you get these errors and the error points to a function, maybe you need an additional
   * transformer to understand the code. Some simple examples from `@workday/canvas-kit-styling` are
   * `px2rem` and `calc.*`. Those have special handlers that are allowed to return new AST nodes
   * that can be further processed. You can return `NumericLiteral`, `StringLiteral`, or
   * `TemplateExpression` AST nodes. You can see `handlePx2Rem` and `handleCalc` transformers as
   * examples as well as associated tests.
   *
   * Transforms are called using the visitor pattern. The order is innermost to outermost of the
   * AST. This means if you have a special utility function used to return a style property, it will
   * be called before the `createStyles` or `createStencils` is called.
   *
   * https://ts-ast-viewer.com/#code/MYewdgzgLgBAtgTwMIjgB3AUzLAvDYAJ0wEMpMBlKBAG0wgAoBvAKBhjRIBMuBLMAOYAuGAMxQACtz6CGAcgAeNOQEoWAXxVA
   * ```ts
   * const myComponent = createStyles({
   *   padding: getPadding('xl')
   * })
   * ```
   *
   * In this example, your transform will be called with `'xl'`, `getPadding`, the `padding`
   * PropertyAssignment, `createStyles`, then variable declarations for `myComponent`. You must
   * create your own filters for each AST node so you only transform the correct nodes. You can
   * visit ts-ast-viewer.com to see the AST and types. You can also use the factory creator to
   * return new AST.
   */
  additionalTransforms?: NodeTransformer[];

  /**
   * Should the CSS be statically extracted into CSS files? If `true`, CSS files will be created
   * according to the `getFileName` configuration. If `getFileName` is not defined, a CSS file will
   * be created with the same name as the source file with a `.css` extension.
   */
  extractCSS?: boolean;

  /**
   * This will be called every time a style or keyframe needs to be injected into extracted style
   * files. By default, the file name will be the current file with the `.tsx` replaced with a
   * `.css`. If you wish to move or combine styles into a file, provide a custom `getFileName`. You
   * can return the same file path for multiple sources. If the same file is used (maybe always
   * returning `index.css`), new styles will be appended to the end of the file.
   */
  getFileName?: (path: string) => string;

  /**
   * Object transforms take an AST node that represents a style object and turn it into a
   * `NestedStyleObject` or return `void`. If an object transform returns an object, transformation
   * parsing stops on that node. If `void` is returned, processing continues using
   * `parseObjectToStaticValue`. These transforms are useful if you have custom utility functions
   * that are not statically parsable by the static styling transformer.
   */
  objectTransforms?: ObjectTransform[];

  /**
   * Property transforms take an AST node that represents a style property value and turn it into a
   * static string. The transform is static and will generate a CSS style string for injection
   * directly into the browser (or CSS file). A string is the only valid return type. Returning
   * `void` instructs the transform to move on to other transforms. Returning a string will
   * short-circuit other property transforms or the default property transform.
   */
  propertyTransforms?: PropertyTransform[];

  /**
   * Optional function for getting a prefix given a file path. This is useful if you want to have a
   * different prefix for each module in a monorepo.
   */
  getPrefix?: (path: string) => string;

  /**
   * Optional seed for the hash. This can be useful if you want each build to have a different hash.
   * If you provide the same seed, the same hash will be generated for every style.
   */
  seed?: string;
}

export type ObjectTransform = (
  node: ts.Node,
  context: TransformerContext
) => NestedStyleObject | void;

export type PropertyTransform = (node: ts.Node, context: TransformerContext) => string | void;
