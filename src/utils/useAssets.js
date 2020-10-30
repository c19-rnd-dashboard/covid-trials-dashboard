import { useContext, useMemo } from 'react'
import { store } from 'store'
import { filterByOptions } from './filterObject'
import { splitVaccinesAndTreatments } from './utils'

export const categoryOptions = [
  {
    label: 'Vaccines',
    menu: [
      { label: 'Volunteer Trials Map', route: '/coronavirus-volunteer-map' },
      { label: 'Why Volunteer', route: '/volunteer-covid-trial' },
      {
        label: 'Vaccines Overview',
        route: '/vaccines/overview',
      },
      { label: 'Vaccines Trial Summary ', route: '/covid-trials-summary' },
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
      // { label: 'About Us', route: '/about' },
      { label: 'Team', route: '/team' },
      { label: 'FAQ', route: '/faq' },
      { label: 'Contact Us', route: '/contact' },
    ],
  },
]

export const allCategoryMenuItems = () => {
  const optionArrays = categoryOptions.map(option => option.menu)
  return [].concat.apply([], optionArrays)
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
