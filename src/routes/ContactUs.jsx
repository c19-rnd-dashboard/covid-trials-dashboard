import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    width: '100%',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
  },
}))

export default function Team() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth={false} className={classes.container}>
          <Box maxWidth='1080px'>
            <Typography variant='h4' align='left' paragraph>
              Contact
            </Typography>
            <Typography variant='body1' align='left' paragraph>
              General Inquiries
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Typography>
                  Check out our{' '}
                  <Link
                    color='secondary'
                    underline='always'
                    component={RouterLink}
                    to='/faq'
                  >
                    FAQ
                  </Link>{' '}
                  for the most frequently asked questions. If you have further
                  questions, email us at{' '}
                  <Link
                    href='mailto:info@coviddash.org'
                    target='_blank'
                    rel='noopener noreferrer'
                    color='secondary'
                    underline='always'
                  >
                    info@coviddash.org
                  </Link>
                  .
                </Typography>
              </Grid>
            </div>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  )
}
