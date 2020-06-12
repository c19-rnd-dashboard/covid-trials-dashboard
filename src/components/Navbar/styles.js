import styled from 'styled-components'
import { smallBreakpoint } from 'constants/breakpoints'

export const Wrapper = styled.div`
  background: #002e6e;
  height: 3rem;
  font-size: 1.1rem;
  position: static;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  @media (${smallBreakpoint}) {
    font-size: 0.8rem;
    height: 2rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
export const Title = styled.div`
  font-weight: bold;
`
export const Divider = styled.div`
  padding: 0 1rem;
  @media (${smallBreakpoint}) {
    padding: 0 0.5rem;
  }
`

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #afafaf;
  &: hover {
    color: white;
    text-decoration: underline;
  }
`
