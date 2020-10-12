import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import {
  ListItem,
  ListItemIcon,
  Collapse,
  List,
  ListItemText,
  makeStyles,
  Checkbox,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export const Filter = ({ name, options, selected, onSelect }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const handleClick = useCallback(() => setOpen(!open), [open])
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {options.map(opt => (
            <ListItem
              key={opt}
              button
              className={classes.nested}
              onClick={() => onSelect(opt)}
            >
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  checked={selected.includes(opt)}
                  tabIndex={-1}
                />
              </ListItemIcon>
              <ListItemText primary={opt} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
}

Filter.defaultProps = {
  options: [],
  selected: [],
  onSelect: () => {},
}
