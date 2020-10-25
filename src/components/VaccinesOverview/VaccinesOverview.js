import React from 'react'
import {
  makeStyles,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core'
import {
  phaseDisplayName,
  phasesInOrder,
} from 'components/MilestonesGraph/constants'

const steps = phasesInOrder.map(phase => phaseDisplayName[phase])

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    maxWidth: theme.spacing(100),
    margin: '0 auto',
  },
}))

export const VaccinesOverview = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='h3' component='h2' gutterBottom>
        Phases of Vaccine Development
      </Typography>
      <Stepper activeStep={steps.length - 1} orientation='vertical'>
        {steps.map(({ label, info }) => (
          <Step key={label} expanded>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{info}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
