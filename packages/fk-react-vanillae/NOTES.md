## Package setup

1) Create new package: `npm init -w ./package/<new-package-name>`
2) Add an empty `vite.config.js`
3) Install _Vite_ at the project: `npm install vite@latest --save-dev -w ./package/<new-package-name>`

## Build 
run  the following command to build the package:

`vite build`

## Publishing

### Styles

CSS modules are basically concatenated into a `styles.css` file as an artifact from

`vite build`

The developer must choose a strategy like BEM to make sure that class names are unique. 
if Different modules contain the same class names collisions will occur with the last processed one winnign out.
