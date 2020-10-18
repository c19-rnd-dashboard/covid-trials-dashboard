import React from 'react'
import AssetsFiltered from './AssetsFiltered'
import { useAssets } from 'utils/useAssets'

const Routes = () => {
  const { assets } = useAssets()
  return <AssetsFiltered assets={assets} title='to be removed' />
}

export default Routes
