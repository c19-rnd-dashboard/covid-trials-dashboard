export const mapboxApiKey =
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
  process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN

export const apiUrl =
  process.env.REACT_APP_API_URL ||
  process.env.STORYBOOK_API_URL ||
  'https://c19-vac-rnd-dash-staging-api.herokuapp.com'
