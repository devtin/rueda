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
<path class="stX trigger i-reduccion"...>
<path class="stX trigger i-evidencia-cardio"...>
<path class="stX trigger i-breezhaler"...>
<path class="stX trigger i-calidad-vida"...>
<path class="stX trigger i-guias-gold"...>
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
