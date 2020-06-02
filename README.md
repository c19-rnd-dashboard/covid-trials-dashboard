[![Netlify Status](https://api.netlify.com/api/v1/badges/fddbe516-12c1-4535-943a-9fa7968d3396/deploy-status)](https://app.netlify.com/sites/covid-19-treatment-dashboard/deploys)

## COVID-19 Vaccines Research and Development Dashboard UI

This is a dashboard UI that will compare the status of all the current vaccines, its state of development and possible dates for each milestone.

If you are new to the project please read [this](https://docs.google.com/document/d/1LHECCE-MHXc-oz3uzq4xChw0jrEKeGKIO-92n_c7e4M/edit) and fill the forms.

## Trello board

https://trello.com/b/zaSLLsjn/c19-rd-tech

On the trello board you can find the tickets to contribute, if you find one you want to help with assign it to yourself and move it to the `In Progress` list, so we don't step on each other.

## Source of data

https://docs.google.com/spreadsheets/d/1M09AJucy7pQzqrXOvku7nYwWL6Ks0edR2fCfTYifnus/edit#gid=1988095192

This is an example spreadsheet data with many products populated, here we can see the data we can work with and propose data structures we could consume as front end.

## Env Variables

All ENV variables should be set on `src/constants/config` for better visibility, and one time setup.

Storybook ENV variables will only show up if they are prefixed with STORYBOOK, and react variables will only show up if they are prefixed with REACT_APP. So if a variable needs to be picked up by both environments then we need to load it like this...

```js
// src/constants/config.js
export const myAwesomeVar =
  process.env.REACT_APP_MY_AWESOME_VAR ||
  process.env.STORYBOOK_MY_AWESOME_VAR ||
  'optional default value'
```

To add the api key for Mapbox, please generate a key from https://www.mapbox.com/ and add to your .env (or .env.local).

```.env
REACT_APP_MAPBOX_ACCESS_TOKEN=<Key>
STORYBOOK_MAPBOX_ACCESS_TOKEN=<key>
# only one of those needed at a time.
```

## Storybook

[https://storybook-covid-19-treatment-dashboard.netlify.app/](https://storybook-covid-19-treatment-dashboard.netlify.app/)

You can create stories co-located with the files (this is recomended) and also inside the `stories` folder. This storybook will be deployed for the master branch and for each PR to the `frosty-kepler` endpoint on netlify.

## Mocks

[mocks/vaccines.js](https://github.com/c19-rnd-dashboard/c19-rnd-dashboard-ui/blob/master/src/mocks/vaccines.js)

This mock file would be for the main endpoint which will have the base data needed to fill the dashboard, please update as necesary.

Datastructure we have so far, for an asset (vaccine or treatment):

Primary Key: `product_id`

```json
{
  "brandName": "",
  "chemicalName": "mrna-1273",
  "conditionOrDisease": "covid-19",
  "countries": "united states",
  "countryCodes": "usa",
  "currentStatus": "phase 1",
  "indication": "covid-19",
  "interventionType": "vaccine - prophylactic",
  "moleculeType": "nucleic acid based therapies/vaccines",
  "notes": "mrna-based vaccine",
  "numSites": "2",
  "otherPartners": "cepi",
  "phase": "1",
  "preferredName": "mrna-1273",
  "productId": 1,
  "productType": "",
  "repurposed": "new",
  "sponsors": "moderna,national institute of allergy and infectious diseases",
  "status": "ongoing",
  "therapeuticApproach": "unknown",
  "trialId": "nct04283461",
  "siteLocations": [
    {
      "name": "Hospital Pkwy",
      "city": "San Jose",
      "state": "California",
      "country": "USA",
      "lat": 37.239746,
      "lon": -121.802344
    }
  ]
}
```

## Code Structure

All components should go under the `src/components` folder. The best practice is for each component to have its own folder with `tests`, `mocks`, `index`, `actualComponent` and `stories`. All this are optional use your best judgement for discerning when to add or leave out one of these files.

For example:

```
- components
  |- MyAwesomeComponent
    |- index.js
    |- MyAwesomeComponent.jsx
    |- MyAwesomeComponent.spec.jsx
    |- MyAwesomeComponent.stories.jsx
```

```js
// index.js
export { MyAwesomeComponent } from './MyAwesomeComponent'
```

```jsx
// MyAwesomeComponent.spec.jsx
import React from 'react'
import { shallow } from 'enzyme'

it('should do something awesome', () => {
  // ...
})
```

```jsx
// MyAwesomeComponent.jsx
import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {}

const defaultTypes = {}

export const MyAwesomeComponent = () => {}

MyAwesomeComponent.propTypes = propTypes
MyAwesomeComponent.defaultTypes = defaultTypes
```

```jsx
// MyAwesomeComponent.stories.jsx
import React from 'react'
import { MyAwesomeComponent } from './MyAwesomeComponent'

export default {
  title: 'Awesome Component',
}

export const AwesomeStory = () => <MyAwesomeComponent />
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
