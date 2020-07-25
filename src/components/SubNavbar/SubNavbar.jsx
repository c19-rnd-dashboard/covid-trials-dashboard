import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Subnavbar = styled.div`
  padding: 1rem;
  background: var(--tile-bg);
  a {
    color: var(--text-color);
    text-decoration: none;
  }
`

export const TabTitleSection = styled.div`
  display: flex;
  color: var(--text-color);
  margin: 2px;
`

const TabName = styled.div`
  padding-right: ${props => (props.selected ? '4px' : '6px')};
  cursor: ${props => (props.selected ? 'none' : 'pointer')};
  border-bottom: ${props => (props.selected ? '2px solid #119c91;' : 'none')};
  border-right: ${props => (props.selected ? '2px solid #119c91;' : 'none')};
  margin-right: 16px;
  color: var(--text-color);
`

export const SubNavbar = () => {
  const location = useLocation()
  return (
    <Subnavbar>
      <TabTitleSection>
        <TabName
          selected={
            location.pathname.startsWith('/vaccine') ||
            location.pathname === '/'
          }
        >
          <Link to='/vaccines'>Vaccines</Link>
        </TabName>
        <TabName selected={location.pathname.startsWith('/treatments')}>
          <Link to='/treatments'>Treatments</Link>
        </TabName>
        <TabName selected={location.pathname.startsWith('/vt')}>
          <Link to='/vt'>Vaccines+Treatments</Link>
        </TabName>
      </TabTitleSection>
    </Subnavbar>
  )
}

export default SubNavbar
