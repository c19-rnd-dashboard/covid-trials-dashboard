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
        filteredVacs,
        filtersSelected,
        selectedAsset,
      }) => (
        <>
          <S.Filter>
            <Tile header='Total Vaccine Products'>
              {vaccines.length || '...'}
            </Tile>
            <Tile>
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
            </Tile>
          </S.Filter>
          <S.TabbedSection>
            <MapAndMilestones
              pins={filteredVacs}
              title='Vaccine Map'
              handleSelectedId={handleSelectedId}
              selectedAsset={selectedAsset}
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
