import React from 'react'
import PropTypes from 'prop-types'
import { StackedBar } from '../StackedBar/StackedBar'
import './MilestonesGraph.css'

const colorBgStyles = ['blue', 'red', 'yellow', 'purple']

const propTypes = {
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(
        PropTypes.oneOf([PropTypes.string, PropTypes.number])
      ),
    })
  ).isRequired,
}

export const MilestonesGraph = ({ milestones }) => (
  <div className='milestones-graph'>
    {milestones.map(({ name, values }) => (
      <div key={name} className='container'>
        <div className='label'>{name}</div>
        <div className='bar'>
          <StackedBar items={values} colorBgStyles={colorBgStyles} />
        </div>
      </div>
    ))}
  </div>
)

MilestonesGraph.propTypes = propTypes
