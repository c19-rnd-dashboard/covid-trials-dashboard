import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Subnavbar = styled.div`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  a {
    color: #ccc;
    text-decoration: none;
  }
`

export const TabTitleSection = styled.div`
  display: flex;
  color: white;
  margin: 2px;
`

const TabName = styled.div`
  padding-right: ${props => (props.selected ? '4px' : '6px')};
  cursor: ${props => (props.selected ? 'none' : 'pointer')};
  border-bottom: ${props => (props.selected ? '2px solid #119c91;' : 'none')};
  border-right: ${props => (props.selected ? '2px solid #119c91;' : 'none')};
  margin-right: 16px;
  color: white !important;
`

export const SubNavbar = () => {
  const location = useLocation()
  return (
    <Subnavbar>
      <TabTitleSection>
        <TabName selected={location.pathname.startsWith('/vaccine') || location.pathname === '/'}>
          <Link to='/vaccines'>Vaccines</Link>
        </TabName>
        <TabName selected={location.pathname.startsWith('/treatments')}>
          <Link to='/treatments'>Treatments</Link>
        </TabName>
      </TabTitleSection>
    </Subnavbar>
  )
}

export default SubNavbar
