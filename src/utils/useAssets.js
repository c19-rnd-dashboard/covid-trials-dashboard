import { useContext, useMemo } from 'react'
import { store } from 'store'
import { filterByOptions } from './filterObject'
import { splitVaccinesAndTreatments } from './utils'

export const categoryOptions = [
  {
    label: 'Home + Trials Map',
    menu: [
      { label: 'Home + Trials Map', route: '/coronavirus-volunteer-map' },
      {
        label: 'Vaccines Timeline Tracker',
        route: '/coronavirus-timeline-tracker',
      },
      {
        label: 'Vaccines Progress by Indicator',
        route: '/covid-trial-vaccine-charts',
      },
      { label: 'Vaccines Summary ', route: '/covid-trials-summary' },
    ],
  },
  {
    label: 'About',
    menu: [
      // { label: 'About Us', route: '/about' },
      { label: 'Why and How to Volunteer', route: '/volunteer-covid-trial' },
      { label: 'About Us', route: '/team' },
      { label: 'FAQ', route: '/faq' },
      { label: 'Contact Us', route: '/contact' },
    ],
  },
  // {
  //   label: 'Volunteer',
  //   options: [
  //
  //   ],
  // },
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
