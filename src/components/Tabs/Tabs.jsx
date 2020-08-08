import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Tab } from '@material-ui/core'
import { TabsStyles } from './styles'

const propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
}

const TabsComponent = ({ tabs = [] }) => {
  const [openTabIndex, setOpenTabIndex] = useState(1)
  const componentShowing = tabs[openTabIndex] && tabs[openTabIndex].content
  const handleChange = (event, newValue) => setOpenTabIndex(newValue)
  return (
    <>
      <TabsStyles
        value={openTabIndex}
        onChange={handleChange}
        aria-label='Visualization selector'
      >
        {tabs.map(({ title }) => (
          <Tab key={title} label={title} />
        ))}
      </TabsStyles>
      {componentShowing}
    </>
  )
}

TabsComponent.propTypes = propTypes

export default TabsComponent
