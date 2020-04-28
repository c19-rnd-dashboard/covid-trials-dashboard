import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  color: white;
  width: 100%;
  flex-direction: column;
`
export const LabelContainer = styled.div`
  border: 1px solid #353535;
  background: #1f1f20;
  cursor: pointer;
  display: flex;
  text-transform: capitalize;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15%;
  &:hover {
    opacity: 0.8;
  }
`

export const Label = styled.span``

export const ArrowDownIcon = styled.img`
  height: 20px;
  width: 20px;
`

export const ArrowRightIcon = styled.img`
  height: 20px;
  width: 20px;
  transform: rotateZ(-90deg);
`

export const OptionsContainer = styled.div``
