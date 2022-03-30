# Tech Challenge for Homespring

This app uses Typescript, React and Google books API to allow an user to search into the Google Books database and
displays results in a friendly way.

## Implementation Notes

This project uses [Tailwind CSS](https://tailwindcss.com) to manage styling the UI, but this is the first time that I
used this library so probably you will find things that can be improved. I created some custom classes to solve
inconsistencies between the Figma design and the common Tailwing CSS classes.

About testing, most of this project is UI so a good strategy of testing if to do E2E testing
using [Playwright](https://playwright.dev/) or [Cypress](https://www.cypress.io) and test the interaction of all the
components. I plan to integrate Playwright but if for the time you check this repository it is not done yet is probably
because I haven't had the time for it, so in the meantime you will find only unit tests that I created when I used TDD
to test some hooks.

## Requirements

:warning:  Is important to use these specific versions to avoid non-functional issues. This repository contains
an `.nvmrc` file that automatically switch to the required versions if you use NVM.

* NodeJS 14.19.1, you can install using [NVM](https://github.com/nvm-sh/nvm) (Recommended) or downloading from
  the [NodeJS](https://nodejs.org/en/download/) web page.

* Clone the repositories for [Client](https://github.com/garusis/homespring-tech-challenge).

## Installation and Setup

Before anything, install dependencies and checkout main branch

```bash
$ npm i  #This will also automatically setup Husky and some git hooks to lint your staged changes in every commit.
$ git checkout main
```

Then create a `.env` file based on `.env.example`. This must contains

* `REACT_APP_BOOKS_API`: Endpoint to search the list of books
* `REACT_APP_GOOGLE_BOOKS_API_KEY`: Google API key with access to the Books
  API ([see more details](https://developers.google.com/books/docs/v1/using#APIKey)).

## Run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you can use any
script available in the docs.

Some useful scripts are:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\