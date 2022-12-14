# Create MITM Boilerplate

Create MITM Boilerplate is a boilerplate project that includes:

- [Next.js](https://nextjs.org/)
- [Storybook](https://storybook.js.org)
- [Styled-components](https://styled-components.com/)
- [Airbnb-linting](https://github.com/airbnb/javascript?ysclid=la5qe13art383667179)
- [Conventional-commits-linting](https://www.conventionalcommits.org/en/)

Create MITM project with no build configuration.

- [Creating a Project](#creating-a-project) – How to create a project.

Create MITM Project works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/70-7h3-m00n/create-mitm-boilerplate/issues/new).<br>

## Quick Overview

```sh
npx create-mitm-boilerplate my-app
cd my-app
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

_This boilerplate uses _**Yarn**_ Package Manager under the hood, that's why using **NPM is not recommended.**_

### npx

```sh
npx create-mitm-boilerplate my-app
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

### Yarn

```sh
yarn create mitm-boilerplate my-app
```

_[`yarn create <starter-kit-package>`](https://yarnpkg.com/lang/en/docs/cli/create/) is available in Yarn 0.25+_

Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── yarn.lock
├── tsconfig.json
├── .gitignore
├── next.config.js
├── commitlint.config.js
├── LICENSE
├── .prettierrc
├── .prettierignore
├── .lintstagedrc.js
├── .eslintrc.js
├── .eslintignore
├── components
├── public
│   └── favicon.ico
├── app
|   ├── globals.css
|   ├── Home.stories.tsx
|   ├── layout.tsx
|   └── page.tsx
├── pages
|   └── api
|       └── hello.ts
├── .storybook
|   ├── main.js
|   ├── preview.js
|   ├── layout.tsx
|   └── page.tsx
└── .husky
    ├── commit-msg.sh
    ├── common.sh
    ├── pre-commit
    └── pre-psuh
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
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

Create MITM Starter is open source software [licensed as Apache version 2.0](https://github.com/facebook/create-mitm-boilerplate/LICENSE).
