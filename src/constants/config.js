export const mapboxApiKey =
  process.env.REACT_APP_MAPBOX_ACCESS_TOKEN ||
  process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN

export const apiUrl =
  process.env.REACT_APP_API_URL ||
  process.env.STORYBOOK_API_URL ||
  'https://c19-vac-rnd-dash-staging-api.herokuapp.com'

export const faqUrl =
  process.env.REACT_APP_FAQ_URL ||
  'https://docs.google.com/document/d/e/2PACX-1vT4eoCyo4UOfGcBn5Cn1BP8lHiSE86Gz8vcfoeV6T_Bg1B97V3zZ8eMm-w7HpMdTAcuKsaR_ONtPGX-/pub'

export const howYouCanHelpUrl =
  process.env.REACT_APP_HOW_YOU_CAN_HELP ||
  'https://docs.google.com/document/d/e/2PACX-1vTdTsgT3UinsENFQM_AKYRV9Ls-D_pPdzCsJppgwlzwq2PSFHVFgVw89dGFG2zhgYfNNqSGyf5PAkxm/pub'

export const spreadsheetDataSource =
  process.env.REACT_APP_SPREADSHEET_DATASOURCE || '#'

export const contactUsUrl =
  process.env.REACT_APP_CONTACT_US_URL || 'mailto:info@coviddash.org'

export const GOOGLE_ANALYTICS_TRACKING_ID =
  process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID

export const vaccineStatusSummaryUrl =
  process.env.REACT_APP_VACCINE_STATUS_SUMMARY_URL ||
  'https://docs.google.com/document/d/e/2PACX-1vRhqY4CdpHGn5wS8L3-P6f3nXPQ4PAk2iIGz8Pa9y7r9PH2n6tZIsipy6-3weYM1PiFs5i9p-ivNwL-/pub'

export const useHardcodeData =
  process.env.REACT_APP_USE_HARDCODE_DATA === 'true'
