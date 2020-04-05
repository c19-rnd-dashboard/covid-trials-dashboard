import React from 'react'
import PropTypes from 'prop-types'
import '../../animations.css'
import './StackedBar.css'
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
  colorBgStyles: PropTypes.arrayOf(PropTypes.string),
  tooltip: PropTypes.func,
  longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  thickness: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  indicator: PropTypes.func,
}

const defaultProps = {
  colorClasses: [],
  colorBgStyles: [],
  tooltip: () => {},
  className: '',
  indicator: () => {},
}

export const StackedBar = ({
  items = [],
  colorClasses = [],
  colorBgStyles = [],
  tooltip,
  longitude,
  thickness,
  className = '',
  indicator,
}) => (
  <div
    className={`stacked-bar ${className}`}
    style={{ width: longitude, height: thickness }}
  >
    {items.map((item, i) => (
      <div
        key={`${item}-${i}`}
        data-test-id='segment'
        style={{
          width: item.value,
          height: '100%',
          backgroundColor: colorBgStyles[i],
        }}
        className={`${
          item.className ? item.className : ''
        } tooltip-wrapper segment ${colorClasses[i] ? colorClasses[i] : ''}`}
      >
        {tooltip({ index: i, ...item })}
      </div>
    ))}
    {indicator()}
  </div>
)

StackedBar.propTypes = propTypes
StackedBar.defaultProps = defaultProps
