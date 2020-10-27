import React from 'react'
import withWidth from '@material-ui/core/withWidth'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Iframe = ({ url, title, width }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      {['xs'].includes(width) ? (
        <div className={classes.heroContent}>
          <Container maxWidth={false} className={classes.container}>
            <Box maxWidth='1080px'>
              <Typography variant='h4' align='left' paragraph>
                <Link
                  href={url}
                  target='_blank'
                  rel='noopener noreferrer'
                  color='secondary'
                  underline='always'
                >
                  Link to {title}
                </Link>
              </Typography>
            </Box>
          </Container>
        </div>
      ) : (
        <Container maxWidth='lg'>
          <iframe
            title='Google Doc Trials Summary'
            style={{ width: '100%', height: '100vh', border: 'none' }}
            src={`${url}?embeded=true`}
          ></iframe>
        </Container>
      )}
    </React.Fragment>
  )
}

Iframe.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
}

export default withWidth()(Iframe)
