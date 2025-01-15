import React from 'react'
import './Rules.css'

export default function Rules(props) {
    
  return (
    <div>
      {props.rule?
        <div className='rulebox'>
        <h1 className='ruleboxh1'>How to play dice game</h1>
        <ul className='ruleboxul'>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After click on dice if selected number is equal to dice number you will get same point as dice</li>
            <li>If you get wrong guess then 2 points will be deducted</li>
        </ul>
        </div>:""}
    </div>
  )
}
