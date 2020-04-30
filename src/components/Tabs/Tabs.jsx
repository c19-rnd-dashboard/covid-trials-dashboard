import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './styles'

const propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
}

const Tabs = ({ tabs }) => {
  const [openTabIndex, setOpenTabIndex] = useState(0)
  const componentShowing = tabs[openTabIndex] && tabs[openTabIndex].content
  console.log(componentShowing)
  return (
    <S.TabArea>
      <S.TabTitleSection>
        {tabs.map((tab, tabIndex) => {
          const { title } = tab
          return (
            <div key={title}>
              {tabIndex === openTabIndex ? (
                <S.SelectedTab
                  data-test-id='selected'
                  onClick={() => setOpenTabIndex(tabIndex)}
                >
                  <S.SelectedTabName>{title}</S.SelectedTabName>
                </S.SelectedTab>
              ) : (
                <S.TabName
                  data-test-id='not-selected'
                  key={title}
                  onClick={() => setOpenTabIndex(tabIndex)}
                >
                  {title}
                </S.TabName>
              )}
            </div>
          )
        })}
      </S.TabTitleSection>
      <div data-test-id='component-showing'>{componentShowing}</div>
    </S.TabArea>
  )
}

Tabs.propTypes = propTypes

export default Tabs
