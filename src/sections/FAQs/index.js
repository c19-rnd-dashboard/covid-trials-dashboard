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
  details: {
    flexDirection: 'column',
  },
}))

export const FAQs = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  const questionsAndAnswers = t('faqs', { returnObjects: true })
  return (
    <Paper className={classes.root}>
      {questionsAndAnswers.map(({ question, answer }) => (
        <Accordion key={question}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`${question}-content`}
          >
            <Typography>{question}</Typography>
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
  )
}
