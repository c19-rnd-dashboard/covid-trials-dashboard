import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { CustomDrawer } from 'sections/Drawer/Drawer'
import { CategoryMenu } from 'components/CategoryMenu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <CustomDrawer />
          <Typography className={classes.title} variant='h6'>
            COVID-19 R&D Dash
          </Typography>
          <CategoryMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
