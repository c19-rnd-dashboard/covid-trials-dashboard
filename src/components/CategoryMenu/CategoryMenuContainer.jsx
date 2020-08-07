import React from 'react'
import PropTypes from 'prop-types'
import { CategoryMenu } from './CategoryMenu'
import { withRouter } from 'react-router-dom'

const categoryOptions = [
  {
    label: 'Vaccine',
    route: '/vaccine',
  },
  {
    label: 'Treatment',
    route: '/treatment',
  },
  {
    label: 'Vaccine & Treatment',
    route: '/vt',
  },
]

export const Container = ({ location, history }) => {
  const selectedCategory =
    categoryOptions.find(({ route }) => route === location.pathname) ||
    categoryOptions[0]
  const handleChange = optionLabel => {
    const selectedRoute = categoryOptions.find(
      ({ label }) => label === optionLabel
    ).route
    history.push(selectedRoute)
  }
  return (
    <CategoryMenu
      options={categoryOptions.map(({ label }) => label)}
      selected={selectedCategory.label}
      onChange={handleChange}
    />
  )
}

Container.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
}

export const CategoryMenuContainer = withRouter(Container)
