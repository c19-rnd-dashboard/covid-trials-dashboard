import { useContext, useMemo } from 'react'
import { store } from 'store'
import { filterByOptions } from './filterObject'
import { splitVaccinesAndTreatments } from './utils'

export const categoryOptions = [
  {
    label: 'Vaccine',
    route: '/vaccines',
  },
  {
    label: 'Team',
    route: '/team',
  },
]

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
