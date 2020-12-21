import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { withWidth } from '@material-ui/core'
import { SpreadCategoryButtons } from './CategoryMenu'
import { CategoryMenu } from './CategoryMenu'
import { categoryOptions, allCategoryMenuItems } from 'utils/useAssets'

export const Container = ({ location, history, width }) => {
  const selectedCategory = categoryOptions.find(option =>
    option.menu
      ? option.menu.find(menuItem => menuItem.route === location.pathname)
      : option.route === location.pathname
  )

  const selectedRoute = allCategoryMenuItems().find(
    menuItem => menuItem.route === location.pathname
  )

  const handleChange = optionLabel => {
    const selectedRoute = allCategoryMenuItems().find(
      ({ label }) => label === optionLabel
    ).route
    history.push(selectedRoute)
  }

  const handleChangeNonMenu = optionLabel => {
    const selectedRoute = categoryOptions.find(
      option => option.label === optionLabel
    ).route
    history.push(selectedRoute)
  }
  const CategoryMenuProps = {
    selectedRoute: selectedRoute ? selectedRoute.label : 'Vaccines',
    onChange: handleChange,
    handleChangeNonMenu: handleChangeNonMenu,
  }
  return ['xs', 'sm'].includes(width) ? (
    <CategoryMenu
      {...CategoryMenuProps}
      allOptions={allCategoryMenuItems()}
      width={width}
    />
  ) : (
    <SpreadCategoryButtons
      {...CategoryMenuProps}
      options={categoryOptions}
      selectedCategory={selectedCategory ? selectedCategory.label : 'Vaccines'}
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
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
}

export const CategoryMenuContainer = withRouter(withWidth()(Container))
