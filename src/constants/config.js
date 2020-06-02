export const mapboxApiKey =
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
  process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN

export const apiUrl =
  process.env.REACT_APP_API_URL ||
  process.env.STORYBOOK_API_URL ||
  'https://c19-vac-rnd-dash-staging-api.herokuapp.com'

export const faqUrl =
  process.env.REACT_APP_FAQ_URL ||
  'https://docs.google.com/document/d/1Mw-CfAzezFh6sFKRKlERU2HxX_e5Lu5bXSUcjVD5gso'

export const howYouCanHelpUrl = process.env.REACT_APP_HOW_YOU_CAN_HELP || '#'

export const spreadsheetDataSource =
  process.env.REACT_APP_SPREADSHEET_DATASOURCE || '#'
