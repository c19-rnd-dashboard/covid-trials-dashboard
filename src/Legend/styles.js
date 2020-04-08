// .legend {
//   display: flex;
//   padding: 20px;
//   color: var(--color);
// }

// .square {
//   display: inline-block;
//   margin-right: 5px;
//   width: 10px;
//   height: 10px;
// }

// .label {
//   margin-right: 10px;
// }

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  color: var(--color);
`

export const Square = styled.span`
  display: inline-block;
  margin-right: 5px;
  width: 10px;
  height: 10px;
`

export const Label = styled.span`
  margin-right: 10px;
`
