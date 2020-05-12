import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../components/Tile/Tile'
import Details from '../sections/Details/Details'
import MapAndMilestones from '../sections/MapAndMilestones'
import * as S from '../styles'
import FilterDropdown from 'components/FilterDropdown/FilterDropdown'
import FilterSelector from './FilterSelector'
// import { ProdData } from '../../mocks/assets'

const Vaccines = ({ vaccines }) => {
  return (
    <FilterSelector
      assets={vaccines}
      render={({
        uniqueNames,
        uniqueSponsors,
        handleSelectedName,
        handleSelectedId,
        handleSelectedSponsor,
        handleSelectedCountry,
        filteredVacs,
        filtersSelected,
        selectedAsset,
        uniqueCountries,
      }) => (
        <>
          <S.Flex1>
            <Tile header='Total Vaccine Products'>
              {vaccines.length || '...'}
            </Tile>
            <Tile>
              <FilterDropdown
                filters={uniqueSponsors}
                selected={filtersSelected.s}
                handleSelected={handleSelectedSponsor}
              />
              <FilterDropdown
                label='name'
                filters={uniqueNames}
                selected={filtersSelected.n}
                handleSelected={handleSelectedName}
              />
              <FilterDropdown
                label='country'
                filters={uniqueCountries}
                selected={filtersSelected.c}
                handleSelected={handleSelectedCountry}
              />
            </Tile>
          </S.Flex1>
          <S.TabbedSection>
            <MapAndMilestones
              pins={filteredVacs}
              title='Vaccine Map'
              handleSelectedId={handleSelectedId}
            />
          </S.TabbedSection>
          <S.RightColumn>
            <Details selectedAsset={selectedAsset} />
          </S.RightColumn>
        </>
      )}
    />
  )
}

Vaccines.propTypes = {
  vaccines: PropTypes.arrayOf(PropTypes.shape({})),
}

Vaccines.defaultProps = {
  vaccines: [],
}

export default Vaccines
