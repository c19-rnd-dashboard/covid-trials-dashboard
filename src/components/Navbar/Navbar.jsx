import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { CustomDrawer } from 'sections/Drawer/Drawer'
import { CategoryMenu } from 'components/CategoryMenu'

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
  },
  logo: {
    height: '2rem',
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <div className={classes.leftSide}>
            <CustomDrawer />
            <Typography className={classes.space} variant='h6'>
              COVID DASH{' '}
            </Typography>
            <img
              className={`${classes.space} ${classes.logo}`}
              src='logos/covidDash-FinalLogos_Mark-White.png'
              alt='Covid Dash Logo White'
            />
          </div>

          <CategoryMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
