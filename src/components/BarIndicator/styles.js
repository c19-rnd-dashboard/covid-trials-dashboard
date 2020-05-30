import styled from 'styled-components'

export const Indicator = styled.div`
  z-index: 1;
  position: relative;
  width: 0.2rem;
  background-color: var(--color);
  height: ${({ length }) => length * 3.167}rem;
`

export const Label = styled.div`
  bottom: -3rem;
  left: -1.8rem;
  flex-direction: column;
  width: 10rem;
  position: absolute;
`

const dotDiameter = '12px'
export const Dot = styled.span`
  position: absolute;
  top: -4px;
  right: -4px;
  width: ${dotDiameter};
  height: ${dotDiameter};
  border-radius: 50%;
  background-color: var(--color);
`
