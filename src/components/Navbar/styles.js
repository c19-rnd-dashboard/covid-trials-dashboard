import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #002e6e;
  height: 56px;
  position: static;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
`

export const TitleContainer = styled.div`
  display: flex;
  font-size: 22px;
  align-items: center;
  height: 100%;
`
export const Title = styled.div`
  font-weight: bold;
`
export const Divider = styled.div`
  padding: 0 1rem;
`

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media (max-width: 1140px) {
    display: none;
  }
`
export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  color: #afafaf;
  & hover {
    color: white;
    text-decoration: underline;
  }
`
