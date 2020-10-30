import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  }
}))

export const SectionsContainer = ({children}) => {
  const classes = useStyles()
  return (<div className={classes.root} >I contain the sections
    {children}
  </div>)
} 