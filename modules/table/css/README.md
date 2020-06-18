# Canvas Kit Table

Data table styling for Canvas Kit.

[> Workday Design Reference](https://design.workday.com/components/containers/tables)

## Installation

```sh
yarn add @workday/canvas-kit-css
```

or

```sh
yarn add @workday/canvas-kit-css-table
```

Add your `node_modules` directory to your SASS `includePaths`. You will then be able to import
`index.scss`.

```scss
@import '~@workday/canvas-kit-css-table/index.scss';
```

## Usage

Use `.wdc-table` on a `<table>` element.

Use table group elements (`<thead>`, `<tbody>`) as some styles are specific to the groups.

```html
<table class="wdc-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Aidan Brown</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Betty Chen</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Helen Gonzalez</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Timothy May</td>
    </tr>
  </tbody>
</table>
```

### Table Meta

If you would like to add meta information above a table (name, count and/or actions), you can place
the `.wdc-table-meta` container before the `.wdc-table`.

```html
<div class="wdc-table-meta">
  <div class="wdc-table-info">
    <span class="wdc-table-name">Data Grid Name</span>
    <span class="wdc-table-row-count">4 Items</span>
  </div>

  <div class="wdc-icon-list">
    <div class="wdc-icon-list-icon">
      <!-- wd-icon-filter.svg -->
    </div>
    <div class="wdc-icon-list-icon">
      <!-- wd-icon-chart-config.svg -->
    </div>
  </div>
</div>
<table class="wdc-table">
  ...
</table>
```

### Alignment

Center align a cell's contents with `.wdc-table-cell-center`.

Right align a cell's contents with `.wdc-table-cell-right`.

```html
<table class="wdc-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="wdc-table-cell-center">1</td>
      <td class="wdc-table-cell-right">Aidan Brown</td>
    </tr>
  </tbody>
</table>
```

### Selects

Tables are compatible with checkbox selects.

Use `.wdc-table-cell-center` on the `<td>` element containing the checkbox to center the checkbox.

```html
<table class="wdc-table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="wdc-table-cell-center"><input type="checkbox" class="wdc-form-checkbox" /></td>
      <td>Aidan Brown</td>
    </tr>
  </tbody>
</table>
```

### Hover State

Explicitly apply hover styling to a table row by using `.wdc-table-row-hover`.

```html
<table class="wdc-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr class="wdc-table-row-hover">
      <td>1</td>
      <td>Aidan Brown</td>
      <td>Product Manager</td>
      <td>San Francisco, CA</td>
    </tr>
  </tbody>
</table>
```

### Selected State

Apply selected styling to a table row by using `.wdc-table-row-selected`.

```html
<table class="wdc-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    <tr class="wdc-table-row-selected">
      <td>1</td>
      <td>Aidan Brown</td>
      <td>Product Manager</td>
      <td>San Francisco, CA</td>
    </tr>
  </tbody>
</table>
```

### Error State

Apply selected styling to a table row by using `.wdc-table-row-error`.

```html
<table class="wdc-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col" id="name-heading">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr class="wdc-table-row-error">
      <td>1</td>
      <td>
        <input
          type="text"
          class="wdc-form-textinput"
          value="Alex Black"
          aria-labelledby="name-heading"
        />
      </td>
    </tr>
  </tbody>
</table>
```

### Alert State

Apply selected styling to a table row by using `.wdc-table-row-alert`.

```html
<table class="wdc-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col" id="name-heading">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr class="wdc-table-row-alert">
      <td>1</td>
      <td>
        <input
          type="text"
          class="wdc-form-textinput"
          value="Alex Black"
          aria-labelledby="name-heading"
        />
      </td>
    </tr>
  </tbody>
</table>
```

### Input Errors and Alerts

Signal errors and alerts for input fields by using
`.wdc-table-row-error-borderless`/`.wdc-table-row-alert-borderless` on the row and
`.wdc-form-error`/`.wdc-form-alert` on the input field.

> Refer to [`canvas-kit-css-forms`](../../form-field/css) for more information regarding input field
> errors.

```html
<table class="wdc-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col" id="name-heading">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr class="wdc-table-row-alert-borderless">
      <td>1</td>
      <td>
        <input
          type="text"
          class="wdc-form-textinput wdc-form-alert"
          value="Alex Black"
          aria-labelledby="name-heading"
        />
      </td>
    </tr>
    <tr class="wdc-table-row-error-borderless">
      <td>1</td>
      <td>
        <input
          type="text"
          class="wdc-form-textinput wdc-form-error"
          value="Aidan Brown"
          aria-labelledby="name-heading"
        />
      </td>
    </tr>
  </tbody>
</table>
```
