import React from 'react'
import { Link } from 'react-router-dom'
import { css } from 'emotion'

const subnavbar = css`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  a {
    margin: 0 15px 0 0;
    color: #ccc;
    text-decoration: none;
    &:hover,
    &:active {
      color: #fff;
    }
    &:active {
      text-decoration: underscore;
    }
  }
`

export const SubNavbar = () => {
  return (
    <div className={subnavbar}>
      <Link to='/treatments/milestones'>Treatments</Link>
      <Link to='/vaccines/milestones'>Vaccines</Link>
    </div>
  )
}

export default SubNavbar
