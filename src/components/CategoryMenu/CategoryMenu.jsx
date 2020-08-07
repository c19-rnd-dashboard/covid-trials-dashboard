import React from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import PropTypes from 'prop-types'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const CategoryMenu = ({ options, selected, onChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <Button
        aria-controls='category-menu'
        aria-haspopup='true'
        color='inherit'
        onClick={handleClick}
      >
        {typeof selected === 'string' ? selected : options[0]}{' '}
        <ExpandMoreIcon />
      </Button>
      <Menu
        id='category-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map(option => (
          <MenuItem
            key={option}
            onClick={() => {
              onChange(option)
              handleClose()
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

CategoryMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func,
}

CategoryMenu.defaultProps = {
  selected: null,
  onChange: option => {
    console.log('Option selected: ', option)
  },
}
