import React from 'react'
import ReactMarkdown from 'react-markdown'
import raw from 'raw.macro'
import MaxWidth from 'components/MaxWidth'
import gfm from 'remark-gfm'
import '../constants/markdown.css'

const TrialSummary = () => {
  const markdown = raw('../constants/trialSummary.md')
  return (
    <div style={{ marginTop: '20px' }}>
      <MaxWidth max='800px'>
        <ReactMarkdown source={markdown} allowDangerousHtml plugins={[gfm]} />
      </MaxWidth>
    </div>
  )
}

export default TrialSummary
