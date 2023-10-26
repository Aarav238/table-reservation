import React from 'react'

const Success = () => {

    const reserveData = JSON.parse(localStorage.getItem("reserve"))
    console.log(reserveData)
    
  return (
    <>
    <div>Thank You for taking our service , <span className='font-bold'>{reserveData.name}!!</span></div>
    <button>R</button>
    </>
 
    
  )
}

export default Success