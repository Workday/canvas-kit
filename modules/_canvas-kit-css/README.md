# Canvas Kit CSS

The bundle package containing all modules of the Canvas CSS Kit.

**Modules**

- [Action Bar](../canvas-kit-css-action-bar)
- [Alert](../canvas-kit-css-alert)
- [Button](../canvas-kit-css-button)
- [Card](../canvas-kit-css-card)
- [Core](../canvas-kit-css-core)
- [Icon](../canvas-kit-css-icon)
- [Form](../canvas-kit-css-form)
- [Grid System](../canvas-kit-css-grid-system)
- [Loading Annimation](../canvas-kit-css-loading-annimation)
- [Page Header](../canvas-kit-css-page-header)
- [Popup](../canvas-kit-css-popup)
- [Table](../canvas-kit-css-table)

## Usage

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '@workday/canvas-kit-css/index.scss';
```

### Base Wrapper

Use `.wdc` to apply styling to the following base elements without requiring an additional class on
each element:

- `h1` - `h5`
- `a`
- `p`
- `button`
- `table`

Type syles will also be applied to every element within this class.

```html
<body class="wdc">
  <h1>Header</h1>

  <p>Page text</p>

  <a href="#">Link</a>

  <button>Button</button>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Aidan Brown</td>
      </tr>
    </tbody>
  </table>
</body>
```
