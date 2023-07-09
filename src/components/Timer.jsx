import React, { useEffect, useState } from 'react'

function Timer({start}) {
    const [time, setTime] = useState({ 
        hours: 0, 
        minutes: 0, 
        seconds:0 
    });

    useEffect(()=>{
        if(start){
            const timer = setInterval(()=>{
                setTime((prevTime) => {
                    const sec = prevTime.seconds + 1
                    const min = prevTime.minutes  + Math.floor(sec / 60)
                    const hours = prevTime.hours + Math.floor(sec / 3600)

                    return {
                        hours:hours ,
                        minutes: min % 60,
                        seconds: sec % 60
                    }
                })

            }, 1000)
            

            return ()=>{
                clearInterval(timer)
            }
        }
        else{
            setTime({
                hours: 0, 
                minutes: 0, 
                seconds:0
            })
        }
    },[start])
  return (
    <div>
        <p>Timer: {time.hours} h : {time.minutes} min : {time.seconds} sec </p>
    </div>
  )
}

export default Timer
