# Getting started

Install [node.js](https://nodejs.org) then install project dependencies:

```sh
$ npm install
```

or if using [yarn](https://yarnpkg.com) (suggested)

```sh
$ yarn
```

# Replacing svg

- Replace only the `<svg>` tag.
- Add `.svg` class to the `<svg>` element: `<svg class="svg"...>`
- Move all styles inside the `<svg>` element to `style.scss` file. Remove any old styles references to the `<svg>` element.
- Make sure clickable paths have their element class accordingly as below:

```
<path class="stX trigger i-evidencia-clinica"...>
<path class="stX trigger i-reduccion-costo"...>
<path class="stX trigger i-mejor-dispositivo"...>
<path class="stX trigger i-gold"...>
<path class="stX trigger i-costo-efectividad"...>
```

# Build JS

Edit *.src.js files, then just:

```sh
$ yarn build:js
```

# Build CSS

Edit *.scss files, the `$ yarn build:css`

# Developing mode

- Live build the css as you develop by running `$ yarn build:css:live`
- Live build the js as you develop by running `$ yarn build:js:live`
- Open dev server `$ yarn dev` (localhost:4000). Look at the [package.json](./package.json) file.
