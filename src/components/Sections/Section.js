import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = alter =>
  makeStyles(theme => ({
    root: {
      backgroundColor: alter
        ? theme.palette.secondary.main
        : theme.palette.background.paper,
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.up('sm')]: {
        flexDirection: alter ? 'row-reverse' : 'row',
      },
      padding: '1rem',
    },
    half: {
      flex: '1',
      padding: '2rem',
    },
    title: {
      color: alter
        ? theme.palette.primary.contrastText
        : theme.palette.secondary.main,
      marginBottom: '1rem',
    },
    content: {
      color: theme.palette.text.primary,
    },
    media: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '20rem',
    },
  }))

export const Section = ({ title, content, action, alter, image }) => {
  const classes = useStyles(alter)()
  return (
    <div className={classes.root}>
      <div className={classes.half}>
        <Typography variant='h5' className={classes.title}>
          {title}
        </Typography>
        <Typography variant='p' className={classes.content}>
          {content}
        </Typography>
        <div>{action}</div>
      </div>
      <div className={`${[classes.half, classes.media].join(' ')}`}>
        <img className={classes.image} src={image} alt='section' />
      </div>
    </div>
  )
}

export const SectionWithChildren = ({ children, alter }) => {
  const classes = useStyles(alter)()
  return <div className={classes.root}>{children}</div>
}

SectionWithChildren.propTypes = {
  children: PropTypes.node.isRequired,
  alter: PropTypes.bool,
}

SectionWithChildren.defaultProps = {
  alter: false,
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.string,
  action: PropTypes.element,
  alter: PropTypes.bool,
}

Section.defaultProps = {
  content: '',
  image: '',
  action: null,
  alter: false,
}
