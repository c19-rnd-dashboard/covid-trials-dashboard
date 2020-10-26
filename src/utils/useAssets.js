import { useContext, useMemo } from 'react'
import { store } from 'store'
import { filterByOptions } from './filterObject'
import { splitVaccinesAndTreatments } from './utils'

export const categoryOptions = [
  {
    label: 'Vaccine',
    menu: [
      { label: 'Overview / Map', route: '/vaccines' },
      { label: 'Timelines', route: '/timelines' },
      { label: 'Charts', route: '/charts' },
      // { label: 'Terminology', route: '/terminology' },
    ],
  },
  {
    label: 'About',
    menu: [
      // { label: 'About Us', route: '/about' },
      { label: 'Team', route: '/team' },
      { label: 'FAQ', route: '/faq' },
      // { label: 'Contact Us', route: '/contact' },
    ],
  },
  // {
  //   label: 'Volounteer',
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
