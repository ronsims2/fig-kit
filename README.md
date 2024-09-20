# How to Monorepo

This project is not only a Figma dev tool kit but a tutorial on how to build a proper monorepo.

Visit the _discovery_ branch to walk through the journey of creating this project.


## Installing dependencies

`npm install lodash-es --workspace @orangemantis/fk-utils`

## Build the utils

To generate the transpiled JS, and declarations run:

`npx tsc --build`

To remove generated generated files, run:

`npx tsc --build --clean`

## Troubleshooting

If you get a 404 error when trying to publish via:

`npm publish --access public`

This is like related authorization.  
The user is likely not logged in or the auth token is invalid.

To see which files will be published run:

`npm publish --dry-run`
