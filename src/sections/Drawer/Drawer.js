import React, { useState } from 'react'
import {
  Drawer,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { drawerLinks } from './DrawerLinks'

export const CustomDrawer = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div>
      <IconButton
        onClick={handleOpen}
        edge='start'
        color='inherit'
        aria-label='menu'
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={handleClose}
        variant='temporary'
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div>
          <List>
            {drawerLinks.map(({ name, url, Icon }) => (
              <ListItem
                button
                component='a'
                href={url}
                target='__blank'
                key={name}
              >
                {Icon && (
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                )}
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}
