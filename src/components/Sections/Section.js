import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import MaxWidth from 'components/MaxWidth'
import { Link } from 'react-router-dom'

const useStyles = alter =>
  makeStyles(theme => ({
    root: {
      backgroundColor: alter
        ? theme.palette.secondary.main
        : theme.palette.background.paper,

      padding: '1rem',
    },
    container: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
      [theme.breakpoints.up('sm')]: {
        flexDirection: alter ? 'row-reverse' : 'row',
      },
    },
    half: {
      flex: '1',
      padding: '2rem',
    },
    actionButton: {
      marginTop: theme.spacing(2),
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

export const Section = ({
  title,
  content,
  action,
  alter,
  image,
  actionLink,
}) => {
  const classes = useStyles(alter)()
  return (
    <div className={classes.root}>
      <MaxWidth>
        <div className={classes.container}>
          <div className={classes.half}>
            <Typography variant='h5' className={classes.title}>
              {title}
            </Typography>

            {content.split('\n').map((p, index) => (
              <Typography
                key={index}
                // variant='p'
                component='p'
                className={classes.content}
                gutterBottom
              >
                {p}
              </Typography>
            ))}
            <Link to={actionLink} style={{ textDecoration: 'none' }}>
              <Button
                className={classes.actionButton}
                variant='contained'
                color={alter ? 'primary' : 'secondary'}
              >
                {action}
              </Button>
            </Link>
          </div>
          <div className={`${[classes.half, classes.media].join(' ')}`}>
            <img className={classes.image} src={image} alt='section' />
          </div>
        </div>
      </MaxWidth>
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
  action: PropTypes.string,
  alter: PropTypes.bool,
  actionLink: PropTypes.string,
}

Section.defaultProps = {
  content: '',
  image: '',
  action: null,
  alter: false,
  actionLink: null,
}
