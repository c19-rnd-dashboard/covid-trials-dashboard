import React, { useState } from 'react'
import * as S from './styles'
import {
  faqUrl,
  howYouCanHelpUrl,
  spreadsheetDataSource,
  contactUsUrl,
  vaccineStatusSummaryUrl,
} from 'constants/config'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const openMenu = event => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title>COVID-19 R&D Dash</S.Title>
        <S.Divider>|</S.Divider>
        <S.Link target='_blank' href={spreadsheetDataSource}>
          Full dataset here
        </S.Link>
      </S.TitleContainer>
      <S.MobileNavbar>
        <IconButton
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={openMenu}
        >
          <MenuIcon style={{ color: 'white' }} />
        </IconButton>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <S.Link target='_blank' href={howYouCanHelpUrl}>
              Why and How to Volunteer
            </S.Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <S.Link target='_blank' href={faqUrl}>
              FAQ
            </S.Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <S.Link target='_blank' href={vaccineStatusSummaryUrl}>
              Vaccine Trials Summary
            </S.Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <S.Link target='_blank' href={contactUsUrl}>
              Contact Us
            </S.Link>
          </MenuItem>
        </Menu>
      </S.MobileNavbar>
      <S.Navbar>
        <S.Link target='_blank' href={howYouCanHelpUrl}>
          Why and How to Volunteer
        </S.Link>
        <S.Divider>|</S.Divider>
        <S.Link target='_blank' href={faqUrl}>
          FAQ
        </S.Link>
        <S.Divider>|</S.Divider>
        <S.Link target='_blank' href={vaccineStatusSummaryUrl}>
          Vaccine Trials Summary
        </S.Link>
        <S.Divider>|</S.Divider>
        <S.Link target='_blank' href={contactUsUrl}>
          Contact Us
        </S.Link>
      </S.Navbar>
    </S.Wrapper>
  )
}

export default Navbar
