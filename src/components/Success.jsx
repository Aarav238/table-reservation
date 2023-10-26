import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate()
    const reserveData = JSON.parse(localStorage.getItem("reserve"))
    const handleClick = () => {
        localStorage.clear();
        navigate("/")
    }
    
  return (
    
    <div className='flex flex-col items-center'>
    <div>Thank You for taking our service , <span className='font-bold'>{reserveData.name}!!</span></div>
    <button onClick={handleClick} className='p-2 bg-blue-600 m-2 rounded-lg text-white hover:bg-blue-900'>Reserve again</button>
    </div>
    
    
 
    
  )
}

export default Success