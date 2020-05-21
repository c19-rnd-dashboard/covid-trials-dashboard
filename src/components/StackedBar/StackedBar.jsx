import React from 'react'
import PropTypes from 'prop-types'
import StackedBarStyles, { Segment } from './styles'
import '../../animations.css'
import '../../tooltip.css'

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
  colorClasses: PropTypes.arrayOf(PropTypes.string),
  tooltip: PropTypes.func,
  longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  indicator: PropTypes.func,
}

const defaultProps = {
  colorClasses: [],
  tooltip: () => {},
  className: '',
  indicator: () => {},
}

export const StackedBar = ({
  items = [],
  colorClasses = [],
  tooltip,
  longitude,
  thickness,
  className = '',
  indicator,
}) => (
  <StackedBarStyles
    className={`stacked-bar ${className}`}
    style={{ width: longitude, height: thickness }}
  >
    {items.map((item, i) => (
      <Segment
        key={`${item}-${i}`}
        data-test-id='segment'
        name={item.className}
        value={item.value}
        className={`tooltip-wrapper segment ${
          colorClasses[i] ? colorClasses[i] : ''
        }`}
      >
        {tooltip({ index: i, ...item })}
      </Segment>
    ))}
    {indicator()}
  </StackedBarStyles>
)

StackedBar.propTypes = propTypes
StackedBar.defaultProps = defaultProps
