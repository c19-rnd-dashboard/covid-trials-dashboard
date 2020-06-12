import styled from 'styled-components'
import { smallBreakpoint } from 'constants/breakpoints'

// export const HeaderBanner = styled.div`
//   padding: 20px;
//   color: white;
//   font-weight: bold;
//   background-color: var(--header-bg);
// `

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Content = styled.div`
  padding: 5px;
  background-color: var(--bg);
  display: flex;

  @media (${smallBreakpoint}) {
    flex-direction: column;
  }
`

export const TrialContainer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
`

export const TrialCountry = styled.div`
  color: white;
  padding-left: 10px;
`

export const ActionItems = styled.div`
  float: right;
  display: flex;
  align-items: center;
  color: white;
`

export const FilterContainer = styled.div`
  position: relative;
`

export const FilterTitle = styled.div`
  display: flex;
  cursor: pointer;
  padding-right: 20px;
  align-items: center;
`

export const SortTitle = styled.span`
  margin-right: 5px;
  color: white;
  font-size: 14px;
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  flex-shrink: 0;
  flex-grow: 0;
  @media (${smallBreakpoint}) {
    order: 2;
    width: 100vw;
  }
`

export const TabbedSection = styled.div`
  flex-basis: 60%;
  flex-shrink: 0;
  flex-grow: 0;
  @media (${smallBreakpoint}) {
    width: 100vw;
  }
`
export const Flex1 = styled.div`
  flex-basis: 20%;
  flex-shrink: 0;
  flex-grow: 0;
  @media (${smallBreakpoint}) {
    order: 1;
    width: 100vw;
  }
`
