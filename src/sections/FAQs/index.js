import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: theme.spacing(100),
    margin: `${theme.spacing(4)}px auto`,
  },
  title: {
    margin: theme.spacing(2),
    fontSize: theme.typography.pxToRem(30),
    textAlign: 'center',
    paddingTop: '1rem',
  },
  details: {
    flexDirection: 'column',
  },
  question: {
    fontWeight: 'bold',
  },
}))

export const FAQs = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const questionsAndAnswers = t('faqs.questionsAndAnswers', {
    returnObjects: true,
  })
  return (
    <div style={{ minHeight: '100vh' }}>
      <Paper className={classes.root}>
        {/* <Typography className={classes.title} component='h1'>
          {t('faqs.title')}
        </Typography> */}
        {questionsAndAnswers.map(({ question, answer }) => (
          <Accordion key={question}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`${question}-content`}
            >
              <Typography className={classes.question}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              {answer.split('\n').map(a => (
                <Typography key={a} component='p' gutterBottom>
                  {a}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </div>
  )
}
