import React from 'react'
import { Button, makeStyles, MenuItem, Menu } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
}))

export const SpreadCategoryButtons = ({ options, selected, onChange }) => {
  const classes = useStyles()
  const selectedProps = {
    variant: 'contained',
    color: 'accent',
  }
  const handleClick = option => () => onChange(option)
  const getSelectedProps = option => (selected === option ? selectedProps : {})
  return (
    <div>
      {options.map(option => (
        <Button
          disableElevation
          className={classes.button}
          onClick={handleClick(option)}
          key={option}
          {...getSelectedProps(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  )
}

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

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onChange: PropTypes.func,
}

const defaultProps = {
  selected: null,
  onChange: option => {
    console.log('Option selected: ', option)
  },
}

CategoryMenu.propTypes = propTypes
CategoryMenu.defaultProps = defaultProps

SpreadCategoryButtons.propTypes = propTypes
SpreadCategoryButtons.defaultProps = defaultProps
