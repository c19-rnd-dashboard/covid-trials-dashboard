import React from 'react'
import './TextInput.css'

export const TextInput = props => (
  <div className='text-input'>
    <span className='decoration'></span>
    <input {...props} />
  </div>
)
