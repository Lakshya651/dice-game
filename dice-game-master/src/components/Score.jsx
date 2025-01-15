import React, { useEffect, useState } from 'react'
import './Score.css'

export default function Score(props) {
  return (
    <h1 className='gamediv1h1'>{props.score}</h1> 
  )
}
