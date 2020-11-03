import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CustomDrawer } from 'sections/Drawer/Drawer'
import withWidth from '@material-ui/core/withWidth'
import PropTypes from 'prop-types'
import { CategoryMenu } from 'components/CategoryMenu'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  leftSide: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    marginLeft: theme.spacing(1),
    fontWeight: 'bold',
  },
  logo: {
    height: '2rem',
  },
}))

const Navbar = ({ width }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <div className={classes.leftSide}>
            <CustomDrawer />
            <StyledLink to='/'>
              <Typography
                className={classes.space}
                variant={width !== 'xs' ? 'h6' : 'body1'}
              >
                COVID Trial Dash{' '}
              </Typography>
              {width !== 'xs' && (
                <img
                  className={`${classes.space} ${classes.logo}`}
                  src='logos/red-logo.svg'
                  alt='Covid Dash Logo White'
                />
              )}
            </StyledLink>
          </div>
          <CategoryMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
}

export default withWidth()(Navbar)
