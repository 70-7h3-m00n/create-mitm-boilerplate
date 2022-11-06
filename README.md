# Create MITM Starter

Create MITM Starter is a boilerplate project that includes:

- [Next.js](https://nextjs.org/)
- [Storybook](https://nextjs.org/)
- [Styled-components](https://nextjs.org/)
- [Airbnb-linting](https://nextjs.org/)
- [Conventional-commits-linting](https://nextjs.org/)

Create MITM project with no build configuration.

- [Creating a Project](#creating-a-project) – How to create a project.

Create MITM Project works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/70-7h3-m00n/create-mitm-starter/issues/new).<br>

## Quick Overview

```sh
npx create-mitm-starter my-app
npm start
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

**Nothing needed!**
Create a project, and you’re good to go.

## Creating a Project

**You’ll need to have Node 16.8.0 or later version on your local development machine** (but it’s not required on the server).
**The latest LTS version is recommended.**
You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new project, you may choose one of the following methods:

_This boilerplate uses _**Yarn**_ Package Manager under hood, so using _**NPM is not recommended.**\_\_

### npx

```sh
npx create-react-app my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### Yarn

```sh
yarn create react-app my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

It will create a directory called `my-app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

Inside the newly created project, you can run some built-in commands:

### `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

### `yarn storybook`

It will start Storybook locally and output the address. Depending on your system configuration, it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen.

[Read more about storybook.](https://storybook.js.org/docs/react/get-started/introduction)

### `yarn build`

Builds the app for production to the `.next` folder.

## License

Create MITM Starter is open source software [licensed as Apache version 2.0](https://github.com/facebook/create-mitm-starter/blob/main/LICENSE).
