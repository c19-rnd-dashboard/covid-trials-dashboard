import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import team from '../constants/team-info'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    width: '100%',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default function Team() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth={false} className={classes.container}>
          <Box maxWidth='1080px'>
            {/* <Typography component='h1' variant='h3' align='center' gutterBottom>
              Who developed this website?
            </Typography> */}
            <Typography variant='h4' align='left' paragraph>
              COVID Trial Dash was developed by a group of 40+ volunteers starting
              in March 2020. It was inspired by{' '}
              <Link
                href='https://www.effectivealtruism.org/'
                target='_blank'
                rel='noopener noreferrer'
                color='textPrimary'
                underline='always'
              >
                Effective Altruism
              </Link>{' '}
              and enabled by{' '}
              <Link
                href='https://helpwithcovid.com/'
                target='_blank'
                rel='noopener noreferrer'
                color='textPrimary'
                underline='always'
              >
                Help with COVID
              </Link>
              and{' '}
              <Link
                href='https://www.giveshop.app/'
                target='_blank'
                rel='noopener noreferrer'
                color='textPrimary'
                underline='always'
              >
                GiveShop
              </Link>
              .
            </Typography>
            </Container>     
      </div>
      <Container className={classes.cardGrid} maxWidth='lg'>
        {/* End hero unit */}
        <Grid container spacing={3}>
          {team.map(person => (
            <Grid item key={person.name} xs={6} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  style={{ height: '260px' }}
                  className={classes.cardMedia}
                  image={person.image}
                  title={person.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {person.name}
                  </Typography>
                  <Typography gutterBottom component='h2' color='textSecondary'>
                    {person.title}
                  </Typography>
                  {person.blurb &&
                    person.blurb.map(statment => (
                      <Typography key={statment}>{statment}</Typography>
                    ))}
                </CardContent>
                <CardActions>
                  {person.link && (
                    <Link
                      href={person.link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      color='secondary'
                    >
                      {person.link.title}
                    </Link>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
       <div className={classes.heroContent}>
        <Container maxWidth={false} className={classes.container}>
         <Box maxWidth='1080px'>
          <Typography
              variant='body1'
              align='left'
              color='textSecondary'
              paragraph
            >
              Thanks also to our other volunteers, including Priya Kaur, Justin Albright, Gabbie
              Wilson, Harsh Desai, Anusha Joshi, Andy Zhou, Joshua Yon, Natalie
              Tang, Ivanna Leon, Okezi Obrutu, Azmi Rahman, Sloane Parker, Meg
              Wilson, Jack Carew, Param Patel, Purab Patel, Daisy Gresham,
              Kristine Su, James Smith, Stephen Hellens, Matthew Rittenhouse,
              Mohamed Arshath, Andrew Chen, Hanna Mass, Enoch Chung, Sara Young,
              Tatum Braun, Bill Young, and Lisa Young, and more!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify='center'>
                <Typography>
                  To help with this website, email{' '}
                  <Link
                    href='mailto:info@coviddash.org'
                    target='_blank'
                    rel='noopener noreferrer'
                    color='secondary'
                    underline='always'
                  >
                    info@coviddash.org
                  </Link>
                </Typography>
              </Grid>
            </div>
          </Box>
        </Container>  
    </React.Fragment>
  )
}
