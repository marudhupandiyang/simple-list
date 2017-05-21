# Why?
Boilerplate for npm/node module. Write with ES6.
**Supports only pure javascript modules]


This boilerplate is for people who want write code using all ES6 features ( and stage-2 ) but also want/need backwards compatibility with old node versions.

# Features
* Build with [Babel](https://babeljs.io). (ES6 -> ES5)
* Test with [mocha](https://mochajs.org).
* Cover with [istanbul](https://github.com/gotwarlost/istanbul).
* Check with [eslint](eslint.org).
* Deploy with [Travis](travis-ci.org).
* Document with [Esdoc](https://esdoc.org)


# To develop a module out of this.
 1. Clone this repo.
 2. Modify `project.config` as per your needs.
 3. Modify the `main` in `package.json` as the same module name that you give in `project.confg`.
 4. To build the development js run `yarn build:dev`
 5. To build for production/distribution run `yarn build:prod`
 6. To build automatically during development run `yarn watch`


# Commands
- `yarn clean` - Remove `lib/` directory
- `yarn test` - Run tests. Tests can be written with ES6 (WOW!)
- `yarn test:watch` - You can even re-run tests on file changes!
- `yarn cover` - Yes. You can even cover ES6 code.
- `yarn lint` - We recommend using [airbnb-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb). It's fantastic.
- `yarn test:examples` - We recommend writing examples on pure JS for better understanding module usage.
- `yarn build:prod` - Do some magic with ES6 to create ES5 code.
- `yarn build:dev` - Do some magic with ES6 to create ES5 code.
- `yarn prepublish` - Hook for npm. Do all the checks before publishing you module.
- `yarn watch` - To compile as and when js files changes.
- `yarn doc:generate` - To generate the doc and open the index.html file


# Installation
Just clone this repo and remove `.git` folder.

