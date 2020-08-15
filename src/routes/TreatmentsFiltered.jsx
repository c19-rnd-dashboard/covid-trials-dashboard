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
        uniqueHealthyVolunteers,
        uniqueStatus,
        uniqueCurrentStages,
        handleSelectedName,
        handleSelectedId,
        handleSelectedSponsor,
        handleSelectedHealthy,
        handleSelectedCountry,
        handleSelectedCurrentStage,
        handleSelectedIndication,
        handleSelectedMolecule,
        handleTherapeuticApproach,
        handleSelectedStatus,
        handleRepurposed,
        filteredAssets,
        filtersSelected,
        selectedAsset,
      }) => (
        <>
          <S.Filter>
            <Tile header='Total Treatment Products'>
              {treatments.length || '...'}
            </Tile>
            <Tile header='Filter By'>
              <FilterDropdown
                label='Accepting Healthy Volunteers'
                filters={uniqueHealthyVolunteers}
                selected={
                  filtersSelected.h === true
                    ? ['yes']
                    : filtersSelected.h === undefined
                      ? []
                      : ['no']
                }
                handleSelected={handleSelectedHealthy}
              />
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
              <FilterDropdown
                label='Current Stage'
                filters={uniqueCurrentStages}
                selected={filtersSelected.cs}
                handleSelected={handleSelectedCurrentStage}
              />
            </Tile>
          </S.Filter>
          <S.TabbedSection>
            <MapAndMilestones
              pins={filteredAssets}
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
