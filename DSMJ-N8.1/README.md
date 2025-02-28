# Naloga 8.1. (obvezna) 2024/2025

Za lasten jezik (glej navodila spodaj) ustvarite vizualno notacijo v Blockly-ju. Naloga je vredna 4 točke.

1) Sestavite si lastno nalogu, po vzoru naloge z Zmajem (https://pisek.acm.si/contents/4907-4902-969753255606603280-1663830720191934729/).

2) Notacija naj vsebuje nekaj lastnih, domenskih konstruktov (najmanj 5, npr. premakni se desno) ter nekaj uporabljenih iz Blockly-ja (najmanj 5, npr. ponavljaj). Primer naloge, ki jo jemljete kot zgled, si zabeležite (primerjali bomo razlike).

3) Z lastnim jezikom zapišite vsaj 3 primere programov in jih shranite v XML notaciji (glej html datoteke v demo mapi Blockly-ja).

4) Zapišite generacijo kode v JavaScript-u in jo tudi ovrednotite. Generiranje kode vsebuje npr. novo pozicijo po izvedenem programu ter kontrolo ali je bila naloga opravljena. 

Primer

1) Spodnji jezik ima 4 lastne konstrukte ("premakni se desno", "premakni se gor", "premakni se levo", "premakni se dol") in en splošno namenski konstrukt (ponavljaj). 


Če vam Zmajček ni "všeč", boste na http://pisek.acm.si/ našli še več podobnih problemov/primerov.


Readme od Blockly Sample App:
# Blockly Sample App

## Purpose

This app illustrates how to use Blockly together with common programming tools like node/npm, webpack, typescript, eslint, and others. You can use it as the starting point for your own application and modify it as much as you'd like. It contains basic infrastructure for running, building, testing, etc. that you can use even if you don't understand how to configure the related tool yet. When your needs outgrow the functionality provided here, you can replace the provided configuration or tool with your own.

## Quick Start

1. [Install](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) npm if you haven't before.
2. Run [`npx @blockly/create-package app <application-name>`](https://www.npmjs.com/package/@blockly/create-package) to clone this application to your own machine.
3. Run `npm install` to install the required dependencies.
4. Run `npm run start` to run the development server and see the app in action.
5. If you make any changes to the source code, just refresh the browser while the server is running to see them.

## Tooling

The application uses many of the same tools that the Blockly team uses to develop Blockly itself. Following is a brief overview, and you can read more about them on our [developer site](https://developers.google.com/blockly/guides/contribute/get-started/development_tools).

- Structure: The application is built as an npm package. You can use npm to manage the dependencies of the application.
- Modules: ES6 modules to handle imports to/exports from other files.
- Building/bundling: Webpack to build the source code and bundle it into one file for serving.
- Development server: webpack-dev-server to run locally while in development.
- Testing: Mocha to run unit tests.
- Linting: Eslint to lint the code and ensure it conforms with a standard style.
- UI Framework: Does not use a framework. For more complex applications, you may wish to integrate a UI framework like React or Angular.

You can disable, reconfigure, or replace any of these tools at any time, but they are preconfigured to get you started developing your Blockly application quickly.

## Structure

- `package.json` contains basic information about the app. This is where the scripts to run, build, etc. are listed.
- `package-lock.json` is used by npm to manage dependencies
- `webpack.config.js` is the configuration for webpack. This handles bundling the application and running our development server.
- `src/` contains the rest of the source code.
- `dist/` contains the packaged output (that you could host on a server, for example). This is ignored by git and will only appear after you run `npm run build` or `npm run start`.

### Source Code

- `index.html` contains the skeleton HTML for the page. This file is modified during the build to import the bundled source code output by webpack.
- `index.js` is the entry point of the app. It configures Blockly and sets up the page to show the blocks, the generated code, and the output of running the code in JavaScript.
- `serialization.js` has code to save and load the workspace using the browser's local storage. This is how your workspace is saved even after refreshing or leaving the page. You could replace this with code that saves the user's data to a cloud database instead.
- `toolbox.js` contains the toolbox definition for the app. The current toolbox contains nearly every block that Blockly provides out of the box. You probably want to replace this definition with your own toolbox that uses your custom blocks and only includes the default blocks that are relevant to your application.
- `blocks/text.js` has code for a custom text block, just as an example of creating your own blocks. You probably want to delete this block, and add your own blocks in this directory.
- `generators/javascript.js` contains the JavaScript generator for the custom text block. You'll need to include block generators for any custom blocks you create, in whatever programming language(s) your application will use.

## Serving

To run your app locally, run `npm run start` to run the development server. This mode generates source maps and ingests the source maps created by Blockly, so that you can debug using unminified code.

To deploy your app so that others can use it, run `npm run build` to run a production build. This will bundle your code and minify it to reduce its size. You can then host the contents of the `dist` directory on a web server of your choosing. If you're just getting started, try using [GitHub Pages](https://pages.github.com/).
