import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { withWidth } from '@material-ui/core'
import { SpreadCategoryButtons } from './CategoryMenu'
import { CategoryMenu } from './CategoryMenu'

const categoryOptions = [
  // AWAITING MAKING THESE PAGES INTO ROUTES IN THE APP, OR NEED TO REFACTOR TO ACCEPT EXTERNAL LINKS
  // {
  //   label: 'Volunteer',
  //   route: '/vaccine',
  // },
  // {
  //   label: 'How to Volunteer',
  //   route:
  //     'https://docs.google.com/document/d/e/2PACX-1vTdTsgT3UinsENFQM_AKYRV9Ls-D_pPdzCsJppgwlzwq2PSFHVFgVw89dGFG2zhgYfNNqSGyf5PAkxm/pub',
  // },
  // {
  //   label: 'Treatment',
  //   route: '/treatments',
  // },
  // {
  //   label: 'Vaccine & Treatment',
  //   route: '/vt',
  // },
]

export const Container = ({ location, history, width }) => {
  if (categoryOptions.length === 0) return null
  const selectedCategory =
    categoryOptions.find(({ route }) => route === location.pathname) ||
    categoryOptions[0]
  const handleChange = optionLabel => {
    const selectedRoute = categoryOptions.find(
      ({ label }) => label === optionLabel
    ).route
    history.push(selectedRoute)
  }
  const CategoryMenuProps = {
    options: categoryOptions.map(({ label }) => label),
    selected: selectedCategory.label,
    onChange: handleChange,
  }
  return ['xs', 'sm'].includes(width) ? (
    <CategoryMenu {...CategoryMenuProps} />
  ) : (
    <SpreadCategoryButtons {...CategoryMenuProps} />
  )
}

Container.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
}

export const CategoryMenuContainer = withRouter(withWidth()(Container))
