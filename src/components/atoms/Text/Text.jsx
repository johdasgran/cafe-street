import React from 'react'
import './Text.css'

function Text(props) {
  return (
    <p className={props.cardStyle} >{props.text}</p>
  )
}

export default Text