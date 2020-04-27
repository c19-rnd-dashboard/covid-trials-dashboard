import React from 'react'
import * as S from './styles'

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title>Coronavirus Task Force</S.Title>
        <S.Divider>|</S.Divider>
        <S.Subtitle>
          Full Dataset located here :{' '}
          <a href='https://link.domain' style={{ color: '#fff' }}>
            https://link.domain
          </a>
        </S.Subtitle>
      </S.TitleContainer>
      <S.Navbar>
        <S.Link>Contact us</S.Link>
        <S.Link>Feedback</S.Link>
        <S.Link>Claim ownership</S.Link>
      </S.Navbar>
    </S.Wrapper>
  )
}

export default Navbar
