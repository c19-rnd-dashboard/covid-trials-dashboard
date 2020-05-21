import styled, { css } from 'styled-components'

export const WrapperDiv = styled.div`
  margin-bottom: 4em;
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
