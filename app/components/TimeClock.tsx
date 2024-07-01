'use client'
import { useState, useEffect } from 'react';
export default function TimeClock() {
    let time = new Date().toLocaleTimeString()
    const [ctime,setTime] = useState(time)
    useEffect(()=>{
        const UpdateTime=()=>{
            time =  new Date().toLocaleTimeString()
            setTime(time)
        }
        setInterval(UpdateTime)
    },[])
    
    return <span className="text-sm" style = {{color: "#D4D4D4"}}>{ctime}</span>

}