import React from 'react'
import dice from './images/diceimg.png'
import './Startgame.css'

export default function Startgame(props) {
    
  return (
    <div className='container stgm'>
        <div className='innerdiv1'>
            <img src={dice} alt="" />
        </div>
        <div>
            <div>
                <h1 className='mainh1'>DICE GAME</h1>
            </div>
            <div className='innerdiv2'>
                <button onClick={props.toggle} className='mainbtn'>Play Now</button>
            </div>
        </div>
    </div>
  )
}
