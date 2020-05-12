import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  useQueryParams,
  ArrayParam,
  withDefault,
  StringParam,
} from 'use-query-params'

const FilterSelector = ({ assets, render }) => {
  const [filteredVacs, setFilteredVacs] = useState([])
  const [selectedAsset, setSelectedAsset] = useState()
  const [filtersSelected, setFiltersSelected] = useQueryParams({
    s: withDefault(ArrayParam, []), // s denotes sponsor
    n: withDefault(ArrayParam, []), // n denotes name
    i: StringParam, // i denotes individual asset id
    c: withDefault(ArrayParam, []), // c denotes country
  })
  useEffect(() => {
    let filteredResults = [...assets]
    if (filtersSelected.s.length > 0) {
      filteredResults = filteredResults.filter(asset =>
        asset.sponsors.some(
          sponsor =>
            filtersSelected.s.indexOf(sponsor.sponsorName.toLowerCase()) > -1
        )
      )
    }
    if (filtersSelected.n.length > 0) {
      filteredResults = filteredResults.filter(
        asset => filtersSelected.n.indexOf(asset.preferredName) > -1
      )
    }
    if (filtersSelected.c.length > 0) {
      filteredResults = filteredResults.filter(
        asset => filtersSelected.c.indexOf(asset.countryCodes) > -1
      )
    }
    if (filtersSelected.i !== undefined) {
      const asset = filteredResults.filter(
        asset => filtersSelected.i == asset.productId
      )
      setSelectedAsset(asset[0]) // we should assume only one asset per productId
    }
    if (filtersSelected.i === undefined && selectedAsset) {
      setSelectedAsset(null)
    }
    if (filteredResults.length !== filteredVacs.length) {
      setFilteredVacs(filteredResults)
    }
  }, [
    assets,
    filtersSelected.s,
    filtersSelected.n,
    filteredVacs.length,
    selectedAsset,
  ])

  const uniqueSponsors = [
    ...new Set(
      assets
        .map(asset => asset.sponsors.map(sponsor => sponsor.sponsorName))
        .flat(1)
    ),
  ]
  const uniqueNames = [
    ...new Set(assets.map(asset => asset.preferredName).flat(1)),
  ]
  const uniqueCountries = [
    ...new Set(
      assets
        .map(asset => asset.countryCodes.toUpperCase())
        .filter(c => c !== '')
        .flat(1)
    ),
  ]

  const handleSelectedSponsor = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, s: [] })
    } else {
      const { name, checked } = e.target
      const nameLowercase = name.toLowerCase()
      const sponsorsCopy = [...filtersSelected.s]
      if (checked === true) {
        sponsorsCopy.push(nameLowercase)
      } else {
        const index = filtersSelected.s.indexOf(nameLowercase)
        sponsorsCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, s: sponsorsCopy })
    }
  }

  const handleSelectedName = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, n: [] })
    } else {
      const { name, checked } = e.target
      const namesCopy = [...filtersSelected.n]
      if (checked === true) {
        namesCopy.push(name)
      } else {
        const index = filtersSelected.n.indexOf(name)
        namesCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, n: namesCopy })
    }
  }

  const handleSelectedCountry = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, c: [] })
    } else {
      const { name, checked } = e.target
      const nameLowercase = name.toLowerCase()
      const countriesCopy = [...filtersSelected.c]
      if (checked === true) {
        countriesCopy.push(nameLowercase)
      } else {
        const index = filtersSelected.c.indexOf(nameLowercase)
        countriesCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, c: countriesCopy })
    }
  }

  const handleSelectedId = assetId => {
    if (assetId === 'clear') {
      setFiltersSelected({ ...filtersSelected, i: undefined })
    } else {
      setFiltersSelected({ ...filtersSelected, i: assetId })
    }
  }

  return (
    <>
      {render({
        uniqueNames,
        uniqueSponsors,
        uniqueCountries,
        handleSelectedName,
        handleSelectedId,
        handleSelectedSponsor,
        handleSelectedCountry,
        filteredVacs,
        filtersSelected,
        selectedAsset,
      })}
    </>
  )
}

FilterSelector.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.shape({})),
  render: PropTypes.func,
}

FilterSelector.defaultProps = {
  assets: [],
}

export default FilterSelector
