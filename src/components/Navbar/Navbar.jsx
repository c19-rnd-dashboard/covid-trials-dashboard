import React from 'react'
import * as S from './styles'
import { faqUrl, howYouCanHelpUrl } from 'constants/config'

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title>COVID-19 R&D Dash</S.Title>
        <S.Divider>|</S.Divider>
        <S.Subtitle>
          Full Dataset located here :{' '}
          <a href='https://link.domain' style={{ color: '#fff' }}>
            https://link.domain
          </a>
        </S.Subtitle>
      </S.TitleContainer>
      <S.Navbar>
        <S.Link href={faqUrl}>FAQ</S.Link>
        <S.Link href={howYouCanHelpUrl}>How you can help</S.Link>
      </S.Navbar>
    </S.Wrapper>
  )
}

export default Navbar
