import React from 'react'
import * as S from './styles'
import {
  faqUrl,
  howYouCanHelpUrl,
  spreadsheetDataSource,
} from 'constants/config'

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title>COVID-19 R&D Dash</S.Title>
      </S.TitleContainer>
      <S.Navbar>
        <S.Link target='_blank' href={faqUrl}>
          FAQ
        </S.Link>
        <S.Divider>|</S.Divider>
        <S.Link target='_blank' href={howYouCanHelpUrl}>
          How you can help
        </S.Link>
        <S.Divider>|</S.Divider>
        <S.Link target='_blank' href={spreadsheetDataSource}>
          Dataset
        </S.Link>
      </S.Navbar>
    </S.Wrapper>
  )
}

export default Navbar
