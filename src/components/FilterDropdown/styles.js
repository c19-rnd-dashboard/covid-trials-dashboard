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

export const OptionsContainer = styled.div`
  width: 100%;
`

export const Input = styled.input`
  width: -webkit-fill-available;
  border: 1px solid #353535;
  background: #1f1f20;
  padding: 10px 15%;
  color: white;
  outline: none;
  font-size: 14px;
  text-transform: capitalize;
`
export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15%;
  font-size: 14px;
  border: 1px solid #353535;
  background: #1f1f20;
`
