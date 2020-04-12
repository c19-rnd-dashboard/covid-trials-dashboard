import styled from 'styled-components'

export const Square = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
`
export const Filter = styled.div`
  color: white;
  padding: 5px;
  float: left;
  background-color: var(--light-grey);
  position: absolute;
  top: 30px;
  z-index: 10;
`

export const Heading = styled.div`
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  white-space: nowrap;
`

export const Label = styled.span`
  padding-right: 10px;
  flex: 1;
`

export const Box = styled.span`
  display: inline-block;
  cursor: pointer;
  width: 14px;
  height: 14px;
  border: 1px solid black;
  background-color: white;
  margin-right: 4px;
`
