import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

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
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'pragmatica-slabserif, sans-serif', // idk why this isn't showing up.  The T should show lines coming down from the two sides of the top
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
      <Alert severity='info'>
        This website is longer actively updated. To find recruiting clinical
        studies in COVID-19 please visit{' '}
        <a
          style={{ color: '#2196f3' }}
          href='https://clinicaltrials.gov/ct2/results?cond=COVID-19'
        >
          ClinicalTrials.gov
        </a>
        . Thank you to all the trial volunteers who helped get COVID vaccines to
        market.
      </Alert>
    </div>
  )
}

Navbar.propTypes = {
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
}

export default withWidth()(Navbar)
