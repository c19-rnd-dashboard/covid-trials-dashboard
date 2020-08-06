import React from 'react'
import PropTypes from 'prop-types'
import { CardStyled } from './styles'
import { Typography, CardContent } from '@material-ui/core'

const Tile = props => {
  const { header, children, ...rest } = props
  return (
    <CardStyled {...rest}>
      <CardContent>
        <Typography>{header}</Typography>
        <div>{children}</div>
      </CardContent>
    </CardStyled>
  )
}

Tile.propTypes = {
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
}

export default Tile
