import styled from 'styled-components'

// export const HeaderBanner = styled.div`
//   padding: 20px;
//   color: white;
//   font-weight: bold;
//   background-color: var(--header-bg);
// `

export const Content = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
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
  flex-direction: column;
  width: 25%;
  @media (max-width: 1140px) {
    width: 100%;
  }
`

export const TabbedSection = styled.div`
  width: 50%;
  @media (max-width: 1140px) {
    width: 100%;
  }
`
export const Filter = styled.div`
  width: 25%;
  @media (max-width: 1140px) {
    width: 100%;
    order: 1;
  }
`
