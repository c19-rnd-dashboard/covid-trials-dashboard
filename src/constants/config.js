export const mapboxApiKey =
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
  process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN ||
  'Empty'
export const appName =
  process.env.REACT_APP_NAME || process.env.STORYBOOK_APP_NAME || 'Empty'
export const environment = process.env.NODE_ENV || 'Empty'
