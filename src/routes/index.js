import React, { useContext } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import AssetsFiltered from './AssetsFiltered'
import { store } from '../store'
import { splitVaccinesAndTreatments } from 'utils/utils'

export const categoryOptions = [
  {
    label: 'Vaccine',
    route: '/vaccine',
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

const Routes = () => {
  const globalState = useContext(store)
  const { pathname } = useLocation()
  const selectedCategory =
    categoryOptions.find(({ route }) => route === pathname) ||
    categoryOptions[0]
  const { assets = [] } = globalState && globalState.state
  const { vaccines, treatments } = useMemo(
    () => splitVaccinesAndTreatments(assets),
    [assets]
  )
  const assetsToRender =
    {
      '/vt': assets,
      '/treatments': treatments,
      '/vaccines': vaccines,
    }[selectedCategory.route] || assets
  return <AssetsFiltered assets={} title={selectedCategory.label} />
}

export default Routes
