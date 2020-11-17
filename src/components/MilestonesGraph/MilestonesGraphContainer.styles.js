import styled, { css } from 'styled-components'
import { Paper } from '@material-ui/core'

export const WrapperDiv = styled.div`
  margin-bottom: 4em;
  padding: 1em;
`

export const Title = styled.div`
  padding: 0.3em 1em;
  font-size: 1.5em;
  width: fit-content;
  ${props =>
    props.active &&
    css`
      background: green;
      color: white;
    `}
`
export const StickyPaper = styled(Paper)`
  position: sticky;
  top: 0.25em;
  z-index: 12;
`
