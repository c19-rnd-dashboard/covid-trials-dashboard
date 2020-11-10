import React from 'react'
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro'
import MaxWidth from 'components/MaxWidth'

const HowToHelp = () => {
  const markdown = raw('../constants/howToHelpMarkdown.md')
  return (
    <div style={{ marginTop: '20px' }}>
      <MaxWidth max='800px'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </MaxWidth>
    </div>
  )
}

export default HowToHelp
