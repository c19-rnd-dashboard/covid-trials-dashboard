import styled from 'styled-components'
import { Card, Typography } from '@material-ui/core'

export const ChartCard = styled(Card)`
  margin-bottom: 1em;
  height: 30rem;
  width: 100%;
  position: relative;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  color: black; /* TODO: figure out a way to make this color themeable */
`
export const Title = styled(Typography)`
  margin-bottom: 1rem;
`
