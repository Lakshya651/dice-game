import React, { useEffect, useState } from 'react'
import './Gameplay.css'
import Score from './Score'
import Rules from './Rules'
import img1 from './images/dice_1.png'
import img2 from './images/dice_2.png'
import img3 from './images/dice_3.png'
import img4 from './images/dice_4.png'
import img5 from './images/dice_5.png'
import img6 from './images/dice_6.png'

export default function Gameplay() {
    const arrNumber=[1,2,3,4,5,6];
    const [selectedNumber,setSelectedNumber]=useState(null);
    const [error, setError] = useState('');
    const [random, setRandom] = useState(null);
    const [resetFlag, setResetFlag] = useState(false);
    const [score, setScore] = useState(0);

    const resetScore = () => {
      setSelectedNumber(null);
      setRandom(null);
      setResetFlag(true); 
  };

  const handleScoreReset = () => {
      setResetFlag(false);
  };

    const show = (value) => {
        console.log("Button clicked. Value to set:",value);
        setSelectedNumber(value);
        setError(" ");
    };
    useEffect(() => {
      console.log("Selected Number State:", selectedNumber);
    }, [selectedNumber]);

    const images = [img1, img2, img3, img4, img5, img6];
    const[img,setImg]=useState(img1);
  
  const generateRandom = () => {
    if (typeof selectedNumber !== 'number') {
        setError('You have not selected any number');
        return;
    }
    const randomval = Math.ceil(Math.random() * 6);
    setRandom(randomval);
    console.log(randomval);
    setImg(images[randomval - 1]);
    if (selectedNumber === randomval) {
      setScore(prevScore => prevScore + randomval);
  } else {
      setScore(prevScore => prevScore - 2);
  }
    setSelectedNumber(null);
  };
  useEffect(() => {
    if (resetFlag) {
        setScore(0);
        handleScoreReset();
    }
  }, [resetFlag, handleScoreReset]);

  const[rule,setRule]=useState(false);
  const[ruletxt,setRuletxt]=useState("Show Rules");
  function Rulecompo(){
    setRule(!rule);
  }
  useEffect(()=>{
    if(rule){
      setRuletxt("Close Rules");
    }else{
      setRuletxt("Show Rules");
    }
  },[rule]);


  return (
    <div>
     <div className='gamediv1'>
      <div>

      <Score score={score} resetFlag={resetFlag} />

      <p className='gamediv1p1'>Total Score</p>
      </div>
      <div>
      {error && <p className='gamedivbtnp'>{error}</p>}
        <div className='gamedivbtn'>
        { arrNumber.map((value,i)=>( 
            <button key={i} className={`boxbtn${value === selectedNumber ? 'dark' : 'light'}`} onClick={()=>show(value)} >{value}</button>
        ))
        }
        </div>
        <div>
            <p className='gamediv1p2'>Select Number</p>
        </div>
      </div>
     </div>
     <div className='gamediv2'>
        <img src={img} onClick={generateRandom} alt="" />
        <p className='gamediv2p' >Click on Dice to roll</p>
        <button className='gamefooterbtn1' onClick={resetScore}>Reset Score</button>
        <button className='gamefooterbtn2' onClick={Rulecompo}>{ruletxt}</button>
     </div>
        <Rules rule={rule} />
    </div>
  )
}
