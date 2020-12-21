import React from 'react'
import {
  Button,
  makeStyles,
  MenuItem,
  Menu,
  ListItemText,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
    color: 'white',
  },
}))

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
      '.MuiButton-contained': {
        backgroundColor: theme.secondary,
      },
    },
  },
}))(MenuItem)

export const SpreadCategoryButtons = ({
  options,
  selectedCategory,
  selectedRoute,
  onChange,
  handleChangeNonMenu,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [menuOpen, setMenuOpen] = React.useState(null)
  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget)
    setMenuOpen(event.currentTarget.id)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setMenuOpen(null)
  }
  const classes = useStyles()
  const selectedProps = {
    variant: 'contained',
  }
  const getSelectedCategoryProps = option =>
    option.label === selectedCategory ? selectedProps : {}
  const onClick = optionLabel => () => {
    onChange(optionLabel)
    handleClose()
  }
  const { t } = useTranslation('menu')
  return (
    <div>
      {options.map(option => (
        <span key={option.label}>
          {option.menu ? (
            <>
              <Button
                // disableElevation
                className={classes.button}
                onClick={handleClickMenu}
                key={option.label}
                {...getSelectedCategoryProps(option)}
                endIcon={<ExpandMoreIcon id={option.label} />}
                id={option.label}
                color='secondary'
              >
                {t(option.label)}
              </Button>
              <Menu
                id='customized-menu'
                anchorEl={anchorEl}
                keepMounted
                open={!!anchorEl && menuOpen === option.label}
                onClose={handleClose}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                {option.menu.map(menuOption => (
                  <StyledMenuItem
                    key={menuOption.label}
                    onClick={onClick(menuOption.label)}
                    selected={menuOption.label === selectedRoute}
                  >
                    <ListItemText primary={t(menuOption.label)} />
                  </StyledMenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Button
              // disableElevation
              className={classes.button}
              onClick={() => handleChangeNonMenu(option.label)}
              key={option.label}
              {...getSelectedCategoryProps(option)}
              id={option.label}
              color='secondary'
            >
              {t(option.label)}
            </Button>
          )}
        </span>
      ))}
    </div>
  )
}

export const CategoryMenu = ({
  allOptions: options,
  selectedRoute,
  onChange,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { t } = useTranslation('menu')
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const onClick = event => {
    onChange(event)
    handleClose()
  }
  return (
    <div>
      <Button
        aria-controls='category-menu'
        aria-haspopup='true'
        color='inherit'
        onClick={handleClick}
      >
        {typeof selectedRoute === 'string' ? selectedRoute : options[0].label}{' '}
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
          <StyledMenuItem
            key={option.label}
            onClick={() => onClick(option.label)}
            selected={option.label === selectedRoute}
          >
            <ListItemText primary={t(option.label)} />
          </StyledMenuItem>
        ))}
      </Menu>
    </div>
  )
}

const propTypes = {
  selectedRoute: PropTypes.string,
  onChange: PropTypes.func,
}

const defaultProps = {
  selected: null,
  onChange: option => {
    console.log('Option selected: ', option)
  },
}

CategoryMenu.propTypes = {
  ...propTypes,
  allOptions: PropTypes.arrayOf(PropTypes.shape({})),
}
CategoryMenu.defaultProps = defaultProps

SpreadCategoryButtons.propTypes = {
  ...propTypes,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedCategory: PropTypes.string,
}
SpreadCategoryButtons.defaultProps = defaultProps
