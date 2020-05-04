import React, { useState } from 'react'
import * as S from './styles'
import { string, func } from 'prop-types'
import ArrowIcon from './assets/white-arrow.png'
import Checkbox from 'rc-checkbox'

const FilterDropdown = ({ label, handleChange }) => {
  const [showOptions, setShowOptions] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [inputValue, setInputValue] = useState()
  const handleToggle = () => {
    setShowOptions(!showOptions)
  }
  const filters = [
    {
      title: 'Sponsor 1',
      count: 12,
    },
    {
      title: 'Sponsor 2',
      count: 4,
    },
    {
      title: 'Sponsor 3',
      count: 48,
    },
  ]

  const renderedFilters = filters.map((filter, i) => (
    <S.Filters key={i}>
      <Checkbox />
      <div>{filter.title}</div>
      <div>({filter.count})</div>
    </S.Filters>
  ))
  return (
    <S.Wrapper>
      <S.LabelContainer onClick={handleToggle}>
        <S.Label>{label}</S.Label>
        {showOptions === true ? (
          <S.ArrowDownIcon src={ArrowIcon} alt='arrowDown' />
        ) : (
          <S.ArrowRightIcon src={ArrowIcon} alt='arrowRight' />
        )}
      </S.LabelContainer>
      {showOptions === true ? (
        <S.OptionsContainer>
          <S.Input
            type='text'
            value={inputValue}
            onChange={handleChange}
            placeholder='Type to search here'
          />
          <div>{renderedFilters}</div>
        </S.OptionsContainer>
      ) : (
        ''
      )}
    </S.Wrapper>
  )
}

FilterDropdown.propTypes = {
  label: string,
  handleChange: func,
}

FilterDropdown.defaultProps = {
  label: 'sponsors',
  handleChange: () => {},
}

export default FilterDropdown
