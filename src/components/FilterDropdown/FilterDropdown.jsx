import React, { useState } from 'react'
import * as S from './styles'
import { string, func, arrayOf } from 'prop-types'
import ArrowIcon from './assets/white-arrow.png'
import Checkbox from 'rc-checkbox'
import Autosuggest from 'react-autosuggest'
import theme from './theme'

const FilterDropdown = ({ label, filters, handleSelected, selected }) => {
  const [suggestionValue, setSuggestionValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const handleToggle = () => {
    setShowOptions(!showOptions)
  }

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
      />
      <div>
        {suggestion.length > 35 ? suggestion.substr(0, 34) + '...' : suggestion}
      </div>
    </S.Filters>
  )

  const renderedFilters = filters.map((filter, i) => (
    <S.Filters key={i}>
      <Checkbox
        onChange={handleSelected}
        name={filter}
        checked={selected.includes(filter)}
      />
      <div>{filter.length > 35 ? filter.substr(0, 34) + '...' : filter}</div>
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
          {suggestionValue.length === 0 && <div>{renderedFilters}</div>}
        </S.OptionsContainer>
      ) : null}
    </S.Wrapper>
  )
}

FilterDropdown.propTypes = {
  label: string,
  handleChange: func,
  filters: arrayOf(string),
  handleSelected: func,
  selected: arrayOf(string),
}

FilterDropdown.defaultProps = {
  label: 'sponsors',
  handleChange: () => {},
}

export default FilterDropdown
