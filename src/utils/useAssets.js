import { useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { store } from 'store'
import { filterByOptions } from './filterObject'
import { splitVaccinesAndTreatments } from './utils'

export const categoryOptions = [
  {
    label: 'Vaccine',
    route: '/vaccines',
  },
  {
    label: 'Treatment',
    route: '/treatments',
  },
  {
    label: 'Vaccine & Treatment',
    route: '/vt',
  },
]

const getAssetsToRender = activeRoute => ({ assets, treatments, vaccines }) =>
  ({
    '/vt': assets,
    '/treatments': treatments,
    '/vaccines': vaccines,
  }[activeRoute] || assets)

export const useAssets = () => {
  const globalState = useContext(store)
  const { pathname } = useLocation()
  const selectedCategory =
    categoryOptions.find(({ route }) => route === pathname) ||
    categoryOptions[0]
  const activeRoute = selectedCategory.route
  const { assets = [], selectedFilters = {} } = globalState && globalState.state
  const assetsByRoute = useMemo(() => {
    const { vaccines, treatments } = splitVaccinesAndTreatments(assets)
    return getAssetsToRender(activeRoute)({
      assets,
      vaccines,
      treatments,
    })
  }, [assets, activeRoute])
  const filteredAssets = useMemo(() => {
    return filterByOptions(selectedFilters)(assetsByRoute)
  }, [assetsByRoute, selectedFilters])
  return { assets, assetsByRoute, filteredAssets, selectedCategory }
}
