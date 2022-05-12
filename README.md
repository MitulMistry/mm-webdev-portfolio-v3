# Web Development Portfolio v3
A [Gatsby](https://www.gatsbyjs.com/) portfolio site for my web applications. The previous React version can be found [here](https://github.com/MitulMistry/mm-webdev-portfolio-v2), while the initial HTML version can be found [here](https://github.com/MitulMistry/mm-webdev-portfolio-v1).

## Gatsby
This project was developed using the default [Gatsby starter template](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default/).

You can find the documentation for Gatsby [here](https://www.gatsbyjs.com/docs).

## Install Instructions
The Gatsby CLI is used to build and run the application. Node Package Manager (NPM) is used for dependencies. To install the application locally, follow these instructions:

1. Install [Node.js](https://nodejs.org/). NPM comes packaged with it.
2. Install the Gatsby CLI using [these instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli).
3. Run `npm install` in the command line while in the project directory. It will install dependencies from the [package.json file](../master/package.json).
4. To build for development and run the local dev server at http://localhost:8000, run `gatsby develop`.

Fonts are preloaded for production builds using [gatsby-plugin-preload-fonts](https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts/). If any fonts or routes have been changed, run `gatsby develop` and `npm preload-fonts` to rebuild the font cache.

## Commands
`gatsby develop` - Runs the app in development mode.

`gatsby build` - Builds the app for production to the build folder.

`gatsby serve` - Serve the application built for production.

`npm preload-fonts` - Build the font preload cache (while development server is running).

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## License
This project is open source under the terms of the [BSD Zero Clause License](https://opensource.org/licenses/0BSD).