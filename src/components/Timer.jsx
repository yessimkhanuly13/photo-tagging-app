import React, { useEffect,  useContext } from 'react'
import { Sec } from '../App';

function Timer({start}) {
  const {setSeconds, seconds} = useContext(Sec)

    useEffect(()=>{
            const timer = setInterval(()=>{
                setSeconds((prevSeconds)=>prevSeconds + 1);
            }, 1000)
            

            return ()=>{
                clearInterval(timer)
            }
    },[start])
  return (
    <div>
        <p>{ seconds/3600 >= 1 ? Math.floor(seconds/3600) + " h: " : ""} {seconds/60 >= 1 ?  Math.floor(seconds/60) + " min : " : ""} {seconds % 60 + " sec"} </p>
    </div>
  )
}

export default Timer
