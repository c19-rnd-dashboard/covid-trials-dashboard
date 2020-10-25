import React from 'react'
import AssetsFiltered from './AssetsFiltered'
import { useAssets } from 'utils/useAssets'

const Routes = () => {
  const { filteredAssets } = useAssets()
  return <AssetsFiltered assets={filteredAssets} title='to be removed' />
}

export default Routes
