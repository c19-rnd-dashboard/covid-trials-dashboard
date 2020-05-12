import React, { useState } from 'react'
import * as S from './styles'
import { string, func, arrayOf } from 'prop-types'
import ArrowIcon from './assets/white-arrow.png'
import Checkbox from 'rc-checkbox'
import Autosuggest from 'react-autosuggest'
import theme from './theme'
import styled from 'styled-components'

// TODO: make a global button style
const StyledButton = styled.button`
  background-color: ${props => (props.disabled ? '#444444' : '#355287')};
  color: ${props => (props.disabled ? '#b0aeae' : 'white')};
  padding: 11px;
  border: none;
  font-size: 14px;
  width: 95%;
  cursor: pointer;
  margin: 4px;
  border-radius: 2px;
`

const FilterContainer = styled.div`
  padding-top: 4px;
`

const FilterDropdown = ({ label, filters, handleSelected, selected }) => {
  const [suggestionValue, setSuggestionValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const handleToggle = () => {
    setShowOptions(!showOptions)
  }

  const shortenName = name => name.replace(/_/g, ' ')

  const getSuggestions = e => {
    const inputValue = e.value.trim().toLowerCase()
    const inputLength = inputValue.length
    setSuggestions(
      inputLength === 0
        ? []
        : filters.filter(
          item => item.toLowerCase().slice(0, inputLength) === inputValue
        )
    )
  }

  const renderSuggestion = suggestion => (
    <S.Filters key={suggestion}>
      <Checkbox
        onChange={handleSelected}
        name={suggestion}
        checked={selected.includes(suggestion)}
        style={{ paddingRight: '5px' }}
      />
      <div>{shortenName(suggestion)}</div>
    </S.Filters>
  )

  const renderedFilters = filters.map((filter, i) => (
    <S.Filters key={i}>
      <Checkbox
        onChange={handleSelected}
        name={filter}
        checked={selected.includes(filter)}
        style={{ paddingRight: '5px' }}
      />
      {shortenName(filter)}
    </S.Filters>
  ))

  const onChange = (event, { newValue }) => {
    setSuggestionValue(newValue)
  }

  const inputProps = {
    placeholder: 'Type to search here',
    value: suggestionValue,
    onChange: onChange,
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
        <S.OptionsContainer>
          <StyledButton
            onClick={() => {
              handleSelected('clear')
            }}
            disabled={selected.length === 0}
          >
            Clear Selection (display all)
          </StyledButton>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={e => getSuggestions(e)}
            onSuggestionsClearRequested={() => setSuggestions([])}
            getSuggestionValue={() => suggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            theme={theme}
            alwaysRenderSuggestions
          />
          {suggestionValue.length === 0 && (
            <FilterContainer>{renderedFilters}</FilterContainer>
          )}
        </S.OptionsContainer>
      ) : null}
    </S.Wrapper>
  )
}

FilterDropdown.propTypes = {
  label: string,
  filters: arrayOf(string),
  handleSelected: func,
  selected: arrayOf(string),
}

FilterDropdown.defaultProps = {
  label: 'sponsors',
}

export default FilterDropdown
