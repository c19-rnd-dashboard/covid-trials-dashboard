import { makeStyles } from '@material-ui/core'

export const legendStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: '0.3rem 0.5rem',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  item: {
    margin: '0 0.3rem',
    minWidth: '7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'pointer',
  },
  square: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    marginRight: theme.spacing(1),
    borderRadius: '50%',
  },
}))
