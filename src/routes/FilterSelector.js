import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  useQueryParams,
  ArrayParam,
  withDefault,
  StringParam,
  BooleanParam,
} from 'use-query-params'

const FilterSelector = ({ assets, render }) => {
  const [filteredAssets, setFilteredAssets] = useState([])
  const [selectedAsset, setSelectedAsset] = useState()
  const [filtersSelected, setFiltersSelected] = useQueryParams({
    s: withDefault(ArrayParam, []), // s denotes sponsor
    n: withDefault(ArrayParam, []), // n denotes name
    i: StringParam, // i denotes individual asset id
    c: withDefault(ArrayParam, []), // c denotes country
    in: withDefault(ArrayParam, []), // in denotes indication
    m: withDefault(ArrayParam, []), // m denotes molecule type
    t: withDefault(ArrayParam, []), // t denotes therapeuticApproach
    r: withDefault(ArrayParam, []), // r denotes repurposed
    st: withDefault(ArrayParam, []), // st denotes status
    h: BooleanParam, // h denoted healthy volunteers
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
    if (filtersSelected.in.length > 0) {
      filteredResults = filteredResults.filter(
        asset => filtersSelected.in.indexOf(asset.indication) > -1
      )
    }
    if (filtersSelected.m.length > 0) {
      filteredResults = filteredResults.filter(
        asset => filtersSelected.m.indexOf(asset.moleculeType) > -1
      )
    }
    if (filtersSelected.t.length > 0) {
      filteredResults = filteredResults.filter(
        asset => filtersSelected.t.indexOf(asset.therapeuticApproach) > -1
      )
    }
    if (filtersSelected.r.length > 0) {
      filteredResults = filteredResults.filter(
        asset => filtersSelected.r.indexOf(asset.repurposed) > -1
      )
    }
    if (filtersSelected.st.length > 0) {
      filteredResults = filteredResults.filter(
        asset => filtersSelected.st.indexOf(asset.status) > -1
      )
    }
    if (filtersSelected.c.length > 0) {
      filteredResults = filteredResults.filter(asset =>
        asset.countryCodes.some(
          countryCode =>
            filtersSelected.c.indexOf(countryCode.toLowerCase()) > -1
        )
      )
    }
    if (filtersSelected.i !== undefined) {
      const asset = filteredResults.filter(
        asset => Number(filtersSelected.i) === asset.productId
      )
      setSelectedAsset(asset[0]) // we should assume only one asset per productId
    }
    if (filtersSelected.h === true) {
      filteredResults = filteredResults.filter(
        asset => asset.acceptsHealthySubjects === 'Yes'
      )
    }
    if (filtersSelected.h === false) {
      filteredResults = filteredResults.filter(
        asset => asset.acceptsHealthySubjects !== 'Yes'
      )
    }
    if (filtersSelected.i === undefined && selectedAsset) {
      setSelectedAsset(null)
    }
    if (filteredResults.length !== filteredAssets.length) {
      setFilteredAssets(filteredResults)
    }
  }, [
    assets,
    filtersSelected.s,
    filtersSelected.n,
    filtersSelected.i,
    filtersSelected.c,
    filtersSelected.in,
    filtersSelected.m,
    filtersSelected.t,
    filtersSelected.r,
    filtersSelected.st,
    filtersSelected.h,
    filteredAssets.length,
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
  const uniqueIndications = [
    ...new Set(
      assets
        .map(asset => asset.indication)
        .flat(1)
        .filter(i => !!i)
    ),
  ]
  const uniqueCountries = [
    ...new Set(
      assets
        .map(asset =>
          asset.countryCodes.map(country => country.length > 1 && country)
        )
        .flat(1)
        .filter(c => !!c)
    ),
  ]
  const uniqueMoleculeTypes = [
    ...new Set(
      assets
        .map(asset => asset.moleculeType)
        .flat(1)
        .filter(m => !!m)
    ),
  ]
  const uniqueTherapeuticApproach = [
    ...new Set(
      assets
        .map(asset => asset.therapeuticApproach)
        .flat(1)
        .filter(t => !!t)
    ),
  ]
  const uniqueRepurposed = [
    ...new Set(
      assets
        .map(asset => asset.repurposed)
        .flat(1)
        .filter(r => !!r)
    ),
  ]
  const uniqueStatus = [
    ...new Set(
      assets
        .map(asset => asset.status)
        .flat(1)
        .filter(r => !!r)
    ),
  ]

  const uniqueHealthyVolunteers = ['Yes', 'No']

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

  const handleSelectedHealthy = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, h: undefined })
    } else {
      const { name, checked } = e.target
      if (name === 'Yes') {
        setFiltersSelected({ ...filtersSelected, h: checked ? 1 : undefined })
      } else if (name === 'No') {
        setFiltersSelected({ ...filtersSelected, h: checked ? 0 : undefined })
      }
    }
  }

  const handleSelectedIndication = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, in: [] })
    } else {
      const { name, checked } = e.target
      const indicationsCopy = [...filtersSelected.in]
      if (checked === true) {
        indicationsCopy.push(name)
      } else {
        const index = filtersSelected.in.indexOf(name)
        indicationsCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, in: indicationsCopy })
    }
  }

  const handleSelectedMolecule = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, m: [] })
    } else {
      const { name, checked } = e.target
      const moleculesCopy = [...filtersSelected.m]
      if (checked === true) {
        moleculesCopy.push(name)
      } else {
        const index = filtersSelected.m.indexOf(name)
        moleculesCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, m: moleculesCopy })
    }
  }

  const handleTherapeuticApproach = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, t: [] })
    } else {
      const { name, checked } = e.target
      const therapeuticCopy = [...filtersSelected.t]
      if (checked === true) {
        therapeuticCopy.push(name)
      } else {
        const index = filtersSelected.t.indexOf(name)
        therapeuticCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, t: therapeuticCopy })
    }
  }
  const handleRepurposed = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, r: [] })
    } else {
      const { name, checked } = e.target
      const repurposedCopy = [...filtersSelected.r]
      if (checked === true) {
        repurposedCopy.push(name)
      } else {
        const index = filtersSelected.r.indexOf(name)
        repurposedCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, r: repurposedCopy })
    }
  }
  const handleSelectedStatus = e => {
    if (e === 'clear') {
      setFiltersSelected({ ...filtersSelected, st: [] })
    } else {
      const { name, checked } = e.target
      const statusCopy = [...filtersSelected.st]
      if (checked === true) {
        statusCopy.push(name)
      } else {
        const index = filtersSelected.r.indexOf(name)
        statusCopy.splice(index, 1)
      }
      setFiltersSelected({ ...filtersSelected, st: statusCopy })
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
        uniqueIndications,
        uniqueMoleculeTypes,
        uniqueTherapeuticApproach,
        uniqueRepurposed,
        uniqueHealthyVolunteers,
        uniqueStatus,
        handleSelectedName,
        handleSelectedId,
        handleSelectedSponsor,
        handleSelectedHealthy,
        handleSelectedCountry,
        handleSelectedIndication,
        handleSelectedMolecule,
        handleTherapeuticApproach,
        handleSelectedStatus,
        handleRepurposed,
        filteredAssets,
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
