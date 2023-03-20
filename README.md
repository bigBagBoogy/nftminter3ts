Maarten:
I added a page called maarten which is a copy of Nfts-page
you can find in the browser by adding /maarten to localhost3000
but it's not in the menu yet from the home page

useful line:
// eslint-disable-next-line @typescript-eslint/no-explicit-any

Adding a page (structure):

- create a new file in the views folder
- This file will describe what should be op the page. export this.
- Now import it in App.tsx and also (in App.tsx) add it to the router.
- add it to the navigation file

# to do:

I want the Mint page to have a different header. The way the project is
now structured in APP is: Every page gets the same components.
How to go about this?

# parse-server migration client (react)

Example app in react, setup to work with a self-hosted parse-server.

## Getting started locally

1. Copy/download this project
2. Install all dependencies via `yarn install` or `npm install`
3. Copy `.env.example` to `.env` and fill in the values

### Run your dapp

- Run `yarn start` to run the client locally

Now your app is running locally at `localhost:3000`
