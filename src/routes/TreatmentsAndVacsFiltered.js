import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../components/Tile/Tile'
import Details from '../sections/Details/Details'
import VolunteerLocations from '../sections/VolunteerLocations/VolunteerLocations'
import MapAndMilestones from '../sections/MapAndMilestones'
import * as S from '../styles'
import FilterDropdown from 'components/FilterDropdown/FilterDropdown'
import FilterSelector from './FilterSelector'

const Treatments = ({ tAndV }) => {
  return (
    <FilterSelector
      assets={tAndV}
      render={({
        uniqueNames,
        uniqueSponsors,
        handleSelectedName,
        handleSelectedId,
        handleSelectedSponsor,
        filteredVacs,
        filtersSelected,
        selectedAsset,
      }) => (
        <>
          <S.Flex1>
            <Tile header='Total Vaccine and Treatment Products'>
              {tAndV.length || '...'}
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
            </Tile>
          </S.Flex1>
          <S.TabbedSection>
            <MapAndMilestones
              pins={filteredVacs}
              title='Vaccine and Treatment Map'
              handleSelectedId={handleSelectedId}
            />
          </S.TabbedSection>
          <S.RightColumn>
            <Details selectedAsset={selectedAsset} />
            <VolunteerLocations />
          </S.RightColumn>
        </>
      )}
    />
  )
}

Treatments.propTypes = {
  tAndV: PropTypes.arrayOf(PropTypes.shape({})),
}

Treatments.defaultProps = {
  tAndV: [],
}

export default Treatments
