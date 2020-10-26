import React from 'react'
import Container from '@material-ui/core/Container'

export default function Faq() {
  return (
    <React.Fragment>
      <Container maxWidth='lg'>
        <iframe
          title='Google Doc FAQ'
          style={{ width: 'inherit', height: '100vh' }}
          src='https://docs.google.com/document/d/e/2PACX-1vT4eoCyo4UOfGcBn5Cn1BP8lHiSE86Gz8vcfoeV6T_Bg1B97V3zZ8eMm-w7HpMdTAcuKsaR_ONtPGX-/pub?embeded=true'
        ></iframe>
      </Container>
    </React.Fragment>
  )
}
