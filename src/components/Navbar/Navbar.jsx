import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { CustomDrawer } from 'sections/Drawer/Drawer'

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <CustomDrawer />
        <Typography variant='h6'>COVID-19 R&D Dash</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
