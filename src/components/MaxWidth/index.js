import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CenterMain = styled.div`
  display: flex;
  justify-content: center;
`
const MainWidth = styled.div`
  display: block;
  width: 1100px;
  max-width: 98vw;
`

const MaxWidth = ({ children }) => (
  <CenterMain>
    <MainWidth>{children}</MainWidth>
  </CenterMain>
)

MaxWidth.propTypes = {
  children: PropTypes.node,
}
export default MaxWidth
