import styled, { css } from 'styled-components'
import { phaseColor } from 'components/MilestonesGraph/constants'

export default styled.div`
  display: flex;
  height: 2em;
  width: 100%;
  animation-name: slidein;
  animation-duration: 1s;
  align-items: flex-end;
`

export const Segment = styled.div`
  position: relative;
  height: 100%;
  &:hover {
    border: solid white 1px;
  }
  ${({ name, value }) => css`
    background-color: ${phaseColor[name]};
    width: ${value};
  `}
`
