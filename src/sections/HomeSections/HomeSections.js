import React from 'react'
import { Section } from 'components/Sections'
import { useTranslation } from 'react-i18next'
import { SectionWithChildren } from 'components/Sections/Section'
import nytLogoLight from '../../assets/press-logos/nyt-light.png'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  },
  imagesContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    margin: theme.spacing(5),
  },
  pressLink: {
    width: theme.spacing(20),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
  },
  pressImg: {
    maxWidth: theme.spacing(20),
    height: 'auto',
  },
}))

const press = [
  {
    logo: nytLogoLight,
    name: 'new york times',
    link:
      'https://www.nytimes.com/2020/08/05/health/volunteer-coronavirus-vaccine-trial.html',
  },
  {
    logo:
      'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/logos/webmd/web/webmd_logo.svg',
    link: 'https://www.webmd.com/lung/news/20200610/covid-19-latest-updates',
    name: 'webmd',
  },
  {
    logo:
      'https://advisory-prod.azureedge.net/-/media/project/advisoryboard/advisory/ab-header-logo.svg?rev=072f384505bd4acca75420252582b5ef&w=114&hash=289F4F61DE3CEC06089A067BFDA91EC4',
    name: 'advisory',
    link:
      'https://www.advisory.com/daily-briefing/2020/08/07/vaccine-volunteer',
  },
]

export const HomeSections = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <>
      <Section
        title={t('section1.title')}
        content={t('section1.content')}
        image='https://c.pxhere.com/images/cb/5f/7b1ec91deafcf5160707d7d2ecfe-1608798.jpg!d'
        action={t('section1.button')}
        actionLink='/team'
      />
      <Section
        alter
        title={t('section2.title')}
        content={t('section2.content')}
        image='https://live.staticflickr.com/7833/46628342315_b73f6a7198_b.jpg'
        action={t('section2.button')}
        actionLink='/volunteer-covid-trial'
      />
      <SectionWithChildren>
        <div className={classes.container}>
          <Typography variant='h4'>{t('pressCoverage')}</Typography>
          <div className={classes.imagesContainer}>
            {press.map(({ logo, link, name }) => (
              <a
                key={link}
                href={link}
                target='__blank'
                rel='noopener noreferrer'
                className={classes.pressLink}
              >
                <img className={classes.pressImg} src={logo} alt={name} />
              </a>
            ))}
          </div>
        </div>
      </SectionWithChildren>
    </>
  )
}
