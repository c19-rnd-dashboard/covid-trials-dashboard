import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../components/Tile/Tile'
import Details from '../sections/Details/Details'
import VolunteerLocations from '../sections/VolunteerLocations/VolunteerLocations'
import MapAndMilestones from '../sections/MapAndMilestones'
import * as S from '../styles'
import styled from 'styled-components'
import FilterDropdown from 'components/FilterDropdown/FilterDropdown'
import FilterSelector from './FilterSelector'
// import { ProdData } from '../../mocks/assets'

const TabbedSection = styled.div`
  min-width: 45%;
`
const Flex1 = styled.div`
  flex: 1;
`

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
        filteredVacs,
        filtersSelected,
        selectedAsset,
      }) => (
        <>
          <Flex1>
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
            </Tile>
          </Flex1>
          <TabbedSection>
            <MapAndMilestones
              pins={filteredVacs}
              title='Vaccine Map'
              handleSelectedId={handleSelectedId}
            />
          </TabbedSection>
          <S.RightColumn>
            <Details selectedAsset={selectedAsset} />
            <VolunteerLocations />
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
