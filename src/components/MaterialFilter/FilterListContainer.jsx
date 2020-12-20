import React, { useContext, useMemo } from 'react'
import { getFilterOptions } from 'utils/filterObject'
import { useAssets } from 'utils/useAssets'
import { formatDateForHuman } from 'utils/utils'
import { Filter } from './Filter'
import { sentenceCase } from 'change-case'
import { ListSubheader } from '@material-ui/core'
import { store } from 'store'
import { toggleFilter } from 'store/filters'
import { useTranslation } from 'react-i18next'

export const FilterList = () => {
  const {
    state: { selectedFilters },
    dispatch,
  } = useContext(store)
  const { assets } = useAssets()
  const filterOptions = useMemo(() => {
    const mapper = {
      sponsors: ({ sponsorName }) => sponsorName,
      studyCompletionDate: formatDateForHuman,
      studyStartDate: formatDateForHuman,
    }
    return getFilterOptions(assets, {
      mapper,
      exclude: [
        'productId',
        'registryLink',
        'trialId',
        'milestones',
        'contact',
        'siteLocations',
        'countryCodes',
        'numSites',
        'sources',
        'notes',
      ],
    })
  }, [assets])
  const { t } = useTranslation('filters')
  return (
    <>
      <ListSubheader>{t('filters')}</ListSubheader>
      {Object.entries(filterOptions).map(([key, values]) => (
        <Filter
          key={key}
          name={t(sentenceCase(key))}
          selected={selectedFilters[key] || []}
          options={values}
          onSelect={option => dispatch(toggleFilter(key)(option))}
        />
      ))}
    </>
  )
}
