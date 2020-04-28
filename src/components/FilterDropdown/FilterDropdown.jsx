import React, { useState } from 'react'
import * as S from './styles'
import { string } from 'prop-types'
import ArrowIcon from './assets/white-arrow.png'

const FilterDropdown = ({ label }) => {
  const [showOptions, setShowOptions] = useState(false)
  const handleToggle = () => {
    setShowOptions(!showOptions)
  }
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
        <S.OptionsContainer>List of options</S.OptionsContainer>
      ) : (
        ''
      )}
    </S.Wrapper>
  )
}

FilterDropdown.propTypes = {
  label: string.isRequired,
}

export default FilterDropdown
