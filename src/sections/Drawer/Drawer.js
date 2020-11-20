import React, { useState } from 'react'
import {
  Drawer,
  IconButton,
  useTheme,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from '@material-ui/core'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import MenuIcon from '@material-ui/icons/Menu'
import { drawerLinks } from './DrawerLinks'
import { ThemeModeSelectorConsumerPropTypes } from 'components/ThemeModeSelector/ThemeModeSelector'
import { ThemeModeSelector } from 'components/ThemeModeSelector/ThemeModeSelector'
import { FilterList } from 'components/MaterialFilter/FilterListContainer'

const ThemeToogleConsumerListItem = ({ onChange, prefersDarkMode }) => (
  <ListItem button onClick={onChange}>
    <ListItemIcon>
      {prefersDarkMode ? <Brightness2Icon /> : <Brightness5Icon />}
    </ListItemIcon>
    <ListItemText primary={`${prefersDarkMode ? 'Dark' : 'Light'} theme`} />
  </ListItem>
)

ThemeToogleConsumerListItem.propTypes = ThemeModeSelectorConsumerPropTypes

const ThemeToogleListItem = ThemeModeSelector(ThemeToogleConsumerListItem)

const useStyles = makeStyles(theme => ({
  drawer: {
    maxWidth: theme.spacing(35),
  },
}))

export const CustomDrawer = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const classes = useStyles()

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
        <div className={classes.drawer}>
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
          </List>
          <FilterList />
        </div>
      </Drawer>
    </div>
  )
}
