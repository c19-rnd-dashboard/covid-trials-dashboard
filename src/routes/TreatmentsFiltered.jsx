import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../components/Tile/Tile'
import Details from '../sections/Details/Details'
import MapAndMilestones from '../sections/MapAndMilestones'
import * as S from '../styles'
import FilterDropdown from 'components/FilterDropdown/FilterDropdown'
import FilterSelector from './FilterSelector'

const Treatments = ({ treatments }) => {
  return (
    <FilterSelector
      assets={treatments}
      render={({
        uniqueNames,
        uniqueSponsors,
        uniqueCountries,
        uniqueIndications,
        uniqueMoleculeTypes,
        uniqueTherapeuticApproach,
        uniqueRepurposed,
        uniqueStatus,
        handleSelectedName,
        handleSelectedId,
        handleSelectedSponsor,
        handleSelectedCountry,
        handleSelectedIndication,
        handleSelectedMolecule,
        handleTherapeuticApproach,
        handleSelectedStatus,
        handleRepurposed,
        filteredVacs,
        filtersSelected,
        selectedAsset,
      }) => (
        <>
          <S.Flex1>
            <Tile header='Total Treatment Products'>
              {treatments.length || '...'}
            </Tile>
            <Tile>
              <FilterDropdown
                label='Sponsor'
                filters={uniqueSponsors}
                selected={filtersSelected.s}
                handleSelected={handleSelectedSponsor}
              />
              <FilterDropdown
                label='Product Name'
                filters={uniqueNames}
                selected={filtersSelected.n}
                handleSelected={handleSelectedName}
              />
              <FilterDropdown
                label='Country'
                filters={uniqueCountries}
                selected={filtersSelected.c}
                handleSelected={handleSelectedCountry}
              />
              <FilterDropdown
                label='Indication'
                filters={uniqueIndications}
                selected={filtersSelected.in}
                handleSelected={handleSelectedIndication}
              />
              <FilterDropdown
                label='Molecule'
                filters={uniqueMoleculeTypes}
                selected={filtersSelected.m}
                handleSelected={handleSelectedMolecule}
              />
              <FilterDropdown
                label='Therapeutic Approach'
                filters={uniqueTherapeuticApproach}
                selected={filtersSelected.t}
                handleSelected={handleTherapeuticApproach}
              />
              <FilterDropdown
                label='Repurposed or New'
                filters={uniqueRepurposed}
                selected={filtersSelected.r}
                handleSelected={handleRepurposed}
              />
              <FilterDropdown
                label='Status'
                filters={uniqueStatus}
                selected={filtersSelected.st}
                handleSelected={handleSelectedStatus}
              />
            </Tile>
          </S.Flex1>
          <S.TabbedSection>
            <MapAndMilestones
              pins={filteredVacs}
              title='Treatment Map'
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

Treatments.propTypes = {
  treatments: PropTypes.arrayOf(PropTypes.shape({})),
}

Treatments.defaultProps = {
  treatments: [],
}

export default Treatments
