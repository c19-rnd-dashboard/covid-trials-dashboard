import { div } from 'sanctuary';

import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = (alter) => makeStyles(theme => ({
  root: {
    backgroundColor: alter ? theme.palette.secondary.main : theme.palette.background,
    display: 'flex',
    flexDirection: alter ? 'row-reverse' : 'row',
    padding: '1rem'
  },
  half: {
    flex: '1',
    padding: '2rem'
  },
  title: {
    color: alter ? theme.palette.primary.contrastText : theme.palette.secondary.main,
    marginBottom: '1rem',
  },
  content: {
    color: alter ? theme.palette.primary.main : theme.palette.text.primary
  },
  media: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '20rem',
  }
}))

export const Section = ({title, content, action, alter, image}) => {
  const classes = useStyles(alter)()
  return (<div className={classes.root} >
    <div className={classes.half} >
      <Typography variant='h5' className={classes.title} >{title}</Typography>
      <Typography variant='p' className={classes.content} >{content}</Typography>
      <div>{action}</div>
    </div>
    <div className={`${[classes.half, classes.media].join(' ')}`}>
      <img className={classes.image} src={image} alt='section' />
    </div>
  </div>)
}