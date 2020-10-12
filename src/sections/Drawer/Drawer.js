import React, { useState } from 'react'
import {
  Drawer,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
} from '@material-ui/core'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import MenuIcon from '@material-ui/icons/Menu'
import { drawerLinks } from './DrawerLinks'
import { ThemeModeSelectorConsumerPropTypes } from 'components/ThemeModeSelector/ThemeModeSelector'
import { ThemeModeSelector } from 'components/ThemeModeSelector/ThemeModeSelector'
import { Filter } from 'components/MaterialFilter'

// Theme button disabled until light theme is ready
const ThemeToogleConsumerListItem = ({ onChange, prefersDarkMode }) => (
  <ListItem button disabled onClick={onChange}>
    <ListItemIcon>
      {prefersDarkMode ? <Brightness2Icon /> : <Brightness5Icon />}
    </ListItemIcon>
    <ListItemText primary={`${prefersDarkMode ? 'Dark' : 'Light'} theme`} />
  </ListItem>
)

ThemeToogleConsumerListItem.propTypes = ThemeModeSelectorConsumerPropTypes

const ThemeToogleListItem = ThemeModeSelector(ThemeToogleConsumerListItem)

export const CustomDrawer = () => {
  const [open, setOpen] = useState(true)
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
            <ThemeToogleListItem />
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
            <ListSubheader component='div' id='nested-list-subheader'>
              Filter by
            </ListSubheader>
            <Filter
              name='Sponsor'
              selected={['bmw']}
              options={['bmw', 'audi', 'ferrari']}
            />
          </List>
        </div>
      </Drawer>
    </div>
  )
}
