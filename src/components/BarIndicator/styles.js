import { makeStyles } from '@material-ui/core'

const dotDiameter = '12px'

export const useStyles = makeStyles(theme => ({
  indicator: {
    zIndex: 1,
    position: 'relative',
    width: '0.2rem',
    height: ({ length }) => `${length * 3.167}rem`,
    backgroundColor: theme.palette.text.primary,
  },
  label: {
    bottom: '-3rem',
    left: '-1.8rem',
    flexDirection: 'column',
    width: '10rem',
    position: 'absolute',
  },
  dot: {
    position: 'absolute',
    top: '-4px',
    right: '-4px',
    width: dotDiameter,
    height: dotDiameter,
    borderRadius: '50%',
    backgroundColor: theme.palette.text.primary,
  },
}))
