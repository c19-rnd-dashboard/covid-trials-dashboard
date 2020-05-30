import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  color: var(--color);
  position: sticky;
  top: 0;
  background-color: black;
  z-index: 10;
  overflow-x: scroll;
`

export const Square = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-right: 0.3rem;
`

export const Label = styled.span``

export const Item = styled.div`
  margin: 0 0.3rem;
  min-width: 7rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
