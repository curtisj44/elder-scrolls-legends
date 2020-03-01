# elder-scrolls-legends
React app consuming an API for The Elder Scrolls: Legends

**Table of Contents**

- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Development](#development)
   - [Common Scripts](#common-scripts)
   - [Learn More About Create React App](#learn-more-about-create-react-app)
- [What’s Missing?](#whats-missing)

---

## Setup

### Prerequisites

1. Node v12.16.1
   - I’d recommend using [NVM](https://github.com/nvm-sh/nvm) to do that.

### Getting Started

1. Assuming you’re using NVM, set the correct version of Node: `nvm use`
1. Install dependencies: `npm install`
1. Start the app: `npm start`
1. View the app: http://localhost:3000/

## Deployment

Each commit to `master` automatically deploys via Netlify:

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7d05845-2359-42b7-8fa3-508ff74334a2/deploy-status)](https://app.netlify.com/sites/elves-orcs-and-more/deploys)

🔗 https://elves-orcs-and-more.netlify.com/

🔒 https://app.netlify.com/sites/elves-orcs-and-more

## Development

## Common Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so it has all their goodness.

These a few of the key commands:

| Command | Description |
| :-- | :-- |
| `npm start` | Runs the app in the development mode. The page will reload if you make edits. You will also see any lint errors in the console. |
| `npm test`| Launches the test runner in the interactive watch mode.<br /> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. |
| `npm run build` | Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information. |

## Learn More About Create React App

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started).
- [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

## What’s Missing?

1. **Better accessibility considerations**

   All dynamic content (additional cards, error messages, loading, searching) should be reviewed further and most-likely improved with ARIA.

1. **More tests**

   1. `App.js` is entirely missing tests, but it needs a bunch of them.
   1. Builds with breaking and/or insufficient tests should break the Netlify build (and not be deployed)

1. **Icons / Favicons**

   The default used by Create React App have been left in place, but should obviously be replaced in a real-world project.
