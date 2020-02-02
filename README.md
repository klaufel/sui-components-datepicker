
<h1 align="center">
  <br>
  <a href="https://adevinta-technical-test.netlify.com/?path=/docs/design-system-intro--page"><img src="https://www.adevinta.com/wp-content/themes/scom/assets/img/Adevinta-logo.svg" alt="Markdownify" width="200"></a>
  <br><br>
   Welcome to Adevinta Design System 👋
  <br>
</h1>

<h4 align="center">A awesome design system for your products and experiences!</h4>

<p align="center">
  <a href="https://app.netlify.com/sites/adevinta-technical-test/deploys">
    <img src="https://api.netlify.com/api/v1/badges/93a5287a-c770-4585-9958-702541893391/deploy-status"
         alt="Netlify Status">
  </a>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-guidelines">Guidelines</a> •
  <a href="#-theming">Theming</a> •
  <a href="#-testing-the-application">Testing</a> •
  <a href="#-how-to-use-in-a-project">Distribution</a> •
  <a href="#-authors">Authors</a>
</p>

![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif)


## :fire: Overview

We use of the best tools to improve the workflow to allow you to create an awesome library of components!

- [ReactJs](https://facebook.github.io/react/) v16
- Type checking with [PropTypes](https://www.npmjs.com/package/prop-types)
- [SASS](https://sass-lang.com/) for styling components and application
- Compiled of modern JavaScript with [Babel](https://github.com/babel/babel) and bundle with [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/) and [Testing library](https://testing-library.com/) for unit/ui testing
- Automate Git hooks with [Husky](https://github.com/typicode/husky)
- Code linting using [Eslint](https://github.com/eslint/eslint)
- Code formatter using [Prettier](https://prettier.io/)
- Developing isolated UI components with [Storybook](https://storybook.js.org/)


## :sparkles: Getting Started

To get you started, you need to meet the prerequisites, and then follow the installation instructions.

#### Installing

You can clone our Git repository:
`$ git clone git@github.com:klaufel/adevinta-technical-test.git`

#### Wiring up your development environment

Setting up, is as easy as running:

`$ npm install`

This command will install all the required dependencies. Please note that `npm install` is only required on your first start, or in case of updated dependencies.

#### Initializing Storybook

Once all the dependencies are installed, you can run `$ npm run storybook` to initialize your development server using [webpack-dev-server](https://webpack.github.io/) middleware.

## :triangular_ruler: Architecture

Based on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles, methodology for creating design systems. There are five distinct levels of components: 

- Atomic Design component structure:
  - Atoms
  - Molecules
  - Organism
  - Templates
  - Pages

When we use the library, the maximum level of component that we are going to have would be an `organism`, the rest of the `templates`and `pages` components are built in the application that imports the library.


##### Source project structure:

```
└── src
    ├── components
    │	├── atoms
    │	├── molecules
    │   └── organism
    ├── docs
    ├── styles
    └── index.js (entry point)
```

- `src`: The place where to put our application source code
	- `components` Add your components here! This folder is divided from [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles.
	- `docs` Add documentation as stories for design system.
	- `styles` Folder to add global styles and theme to build components.
	- `index.js` Entry point, import all components and export to generate package to use in project as a dependency.

---

##### Example of `component` structure


```
└── mycomponent
    ├── __mocks__
    │   └── mycomponent.mock.js
    ├── __stories__
    │   └── mycomponent.stories.{js|mdx}
    ├── __tests__
    │	├── __snapshots__
    │	│   └── mycomponent.test.js.snap
    │   └── mycomponent.test.js
    ├── index.scss
    └── index.js
```

- **mycomponent**: Folder which contains our component.
  - `__mocks__`: Folder to contains the mocks logic.
    - `mycomponent.mock.js`: File for mock compononet to use in your stories or tests.
  - `__stories__`: Folder to contains the stories for Storybook.
    - `mycomponent.stories.js`: Contains the stories of component for Storybook
  - `__tests__`: Folder to contains the tests of component.
    - `__snapshots__`: Folder to contains the snapthots tests, autogenerate for jest.
      - `mycomponent.test.js.snap`: Snapshot file, autogenerate for jest.
    - `mycomponent.test.js`: Contains the test of component.
  - `index.js`: Contains the React component, HTML or other imports from ui-library.
  - `index.scss`: Contain the styles of component.


## :nail_care: Guidelines


#### Styles

Styles must follow the [SUIT convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md).


#### Linting / Formatter

Use [sui-lint](https://github.com/SUI-Components/sui/tree/master/packages/sui-lint), CLI to lint your code and make it compliant. It provides:

* Same js and sass style of code across all company.
* Linting rules a reference package, not duplicated linting config in every project.
* Implemented as a reusable CLI.


###### Linting
`$ npm run lint` Find problems in your code `(js and sass)`

`$ npm run lint:js` Find problems in your code `(only js)`

`$ npm run lint:sass` Find problems in your code `(only sass)`

###### Formatter
`$ npm run prettier:check` Find format problems in your code.

`$ npm run prettier:write` Fix format problems in your code.

#### Git hooks

There is a hook to pre-commit with [Husky](https://github.com/typicode/husky), will run `$ npm run prettier:write`, so that all the code pushed is complies with the established rules!



## :rainbow: Theming


##### Example of `theme` structure

```
└── styles
	└── lib
    	└── themes
        	├── mytheme
            │   ├── _components.scss
            │   ├── _fonts.scss
            │   ├── _variables.scss
            │   └── _index.scss
            └── _index.scss (import your actual theme)
```


- **mytheme**: Folder which the theme config.
  - `_components.scss`: File to overwrites styles specifically at the component level.
  - `_fonts.scss`: Import fonts to the theme.
  - `_variables.scss`: Overwrites the global variables of the theme.
  - `_index.scss`: Entry point file. Import all files in your theme (components, fonts, variables).

The global variables by default are obtained from library: `@schibstedspain/sui-theme`

In the file `lib/_index.scss` , they are imported directly:
```
@import '~@schibstedspain/sui-theme/lib/settings-compat-v7/index';
@import '~@schibstedspain/sui-theme/lib/index';
```

To import a theme, it must currently be done manually `(see TODO below)`. In the file `lib/theme/_index.scss`, import the theme you need.

`Example:`
```
@import 'adevinta/index';
```


##### Design systems deployed with themes

- Default theme (SUI): [https://adevinta-technical-test-sui.netlify.com/](https://adevinta-technical-test-sui.netlify.com/)

- Adevinta theme: [https://adevinta-technical-test.netlify.com/](https://adevinta-technical-test.netlify.com/)

- Milanuncios theme: [https://adevinta-technical-test-milanuncios.netlify.com/](https://adevinta-technical-test-milanuncios.netlify.com/)


`TODO: Make selector for dynamic theme change through Storybook using SASS theme. Currently, it is necessary to modify the import of the current theme.
In the current system of @schibstedspain/sui-theme the themes of each marketplace are being imported, we would have to do it that way but with specificity to each component, using the design tokens for components.
`



## :pray: Testing the application

[Jest](https://jestjs.io/), a delightful javascript testing framework and [Testing Library](https://testing-library.com/) builds on top of DOM testing library by adding APIs for working with React components.

#### Running your tests

`$ npm run test` Will perform your unit testing.

`$ npm run test:update` Will perform your unit testing and update snapshots.

`$ npm run test:watch` Will perform your unit testing and watchers tests.

`$ npm run test:coverage` Will perform your unit testing and show coverage.

`$ npm run test:coverage-web` Will perform your unit testing and show coverage and open report in your default browser.

#### Git hooks

There is a hook to pre-push with [Husky](https://github.com/typicode/husky), will run `$ npm run test`, so that all the code pushed works correctly!


## :mailbox: How to use in a project

`TODO: Package the library so it can be used by other applications with the theme config`

## :cookie: Authors

**Adevinta Team**

Website: https://adevinta-technical-test.netlify.com/
