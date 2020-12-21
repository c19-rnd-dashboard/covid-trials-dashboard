import { useContext, useMemo } from 'react'
import { store } from 'store'
import { filterByOptions } from './filterObject'
import { splitVaccinesAndTreatments } from './utils'

export const categoryOptions = [
  {
    label: 'Vaccines',
    menu: [
      { label: 'Vaccines Trial Summary', route: '/covid-trials-summary' },
      {
        label: 'Timelines',
        route: '/coronavirus-timeline-tracker',
      },
      {
        label: 'Charts',
        route: '/covid-trial-vaccine-charts',
      },
    ],
  },
  {
    label: 'About',
    menu: [
      { label: 'Team', route: '/team' },
      { label: 'FAQ', route: '/faq' },
      { label: 'Contact Us', route: '/contact' },
    ],
  },
  { label: 'Why Volunteer', route: '/volunteer-covid-trial' },
]

export const allCategoryMenuItems = () => {
  const optionArrays = categoryOptions.map(option => option.menu)
  const withOuterLinks = [
    ...optionArrays,
    categoryOptions.map(option => option.route && option),
  ]
  const allRoutes = [].concat.apply([], withOuterLinks)
  return allRoutes.filter(obj => obj && obj)
}

export const useAssets = () => {
  const globalState = useContext(store)
  const { assets = [], selectedFilters = {} } = globalState && globalState.state
  const assetsByRoute = useMemo(() => {
    const { vaccines } = splitVaccinesAndTreatments(assets)
    return vaccines
  }, [assets])
  const filteredAssets = useMemo(() => {
    return filterByOptions(selectedFilters)(assetsByRoute)
  }, [assetsByRoute, selectedFilters])
  return { assets, assetsByRoute, filteredAssets }
}
