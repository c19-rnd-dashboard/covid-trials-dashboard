import React from 'react'
import Select from 'react-select'
import './SortDropdown.css'

const SortDropdown = (props) => {
  const { onChange } = props
  const options = [
    { value: 'best', label: 'Best' },
    { value: 'worst', label: 'Worst' },
    { value: 'actual', label: 'Actual' }
  ]

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: 'black',
      padding: '2px',
      fontSize: '14px',
      cursor: 'pointer'
    }),
    control: (provided, state) => ({
      ...provided,
      fontSize: '14px',
      minHeight: '24px',
      width: '90px',
      cursor: 'pointer'
    }),
    indicatorSeparator: () => ({
      display: 'none'
    })
  }
  return (
    <Select
      options={options}
      defaultValue={options[0]}
      onChange={onChange}
      styles={customStyles}
      isSearchable={false}
      classNamePrefix='sort'
    />
  )
}

export default SortDropdown
