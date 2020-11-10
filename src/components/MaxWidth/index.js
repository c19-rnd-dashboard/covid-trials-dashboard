import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CenterMain = styled.div`
  display: flex;
  justify-content: center;
`
const MainWidth = styled.div`
  display: block;
  max-width: ${props => (props.max ? props.max : '1100px')};
  width: 98vw;
`

const MaxWidth = ({ children, max }) => (
  <CenterMain>
    <MainWidth max={max}>{children}</MainWidth>
  </CenterMain>
)

MaxWidth.propTypes = {
  children: PropTypes.node,
  max: PropTypes.string,
}
export default MaxWidth
