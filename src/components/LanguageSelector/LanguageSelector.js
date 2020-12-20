import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import { ExpandLess, ExpandMore, LanguageOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export const LanguageSelector = ({ languages, onSelect }) => {
  const { t } = useTranslation('languages')
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  console.log({ languages })
  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <LanguageOutlined />
        </ListItemIcon>
        <ListItemText primary={t('selectorTitle')} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout={300} unmountOnExit>
        <List component='div' disablePadding>
          {languages.map(lan => (
            <ListItem
              key={lan}
              button
              className={classes.nested}
              onClick={() => onSelect(lan)}
            >
              <ListItemText primary={t(lan)} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  )
}

LanguageSelector.propTypes = {
  onSelect: PropTypes.func,
  languages: PropTypes.arrayOf(PropTypes.string),
}

LanguageSelector.defaultProps = {
  languages: ['en', 'es'],
}
