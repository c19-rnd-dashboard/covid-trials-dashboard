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
  const [openTab, setOpenTab] = useState(tabs[0] || null)
  const componentShowing = openTab && openTab.content
  return (
    <S.TabArea>
      <S.TabTitleSection>
        {tabs.map(tab => {
          const { title } = tab
          return (
            <div key={title}>
              {title === openTab.title ? (
                <S.SelectedTab
                  data-test-id='selected'
                  onClick={() => setOpenTab(tab)}
                >
                  <S.SelectedTabName>{title}</S.SelectedTabName>
                </S.SelectedTab>
              ) : (
                <S.TabName
                  data-test-id='not-selected'
                  key={title}
                  onClick={() => setOpenTab(tab)}
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
