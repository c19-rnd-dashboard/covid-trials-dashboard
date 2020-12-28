import React from 'react'
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro'
import MaxWidth from 'components/MaxWidth'
import gfm from 'remark-gfm'

const HowToHelp = () => {
  const markdown = raw('../constants/faq.md')
  return (
    <div style={{ marginTop: '20px' }}>
      <MaxWidth max='800px'>
        <ReactMarkdown source={markdown} allowDangerousHtml plugins={[gfm]} />
      </MaxWidth>
    </div>
  )
}

export default HowToHelp
