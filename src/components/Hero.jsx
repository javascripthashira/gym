import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center  text-center max-w-[800px] w-full mx-auto p-4'>
     <div className='flex flex-col gap-4'>
      <p className='uppercase'>HELPING INDIVIDUALS REACH THEIR FITNESS GOALS SINCE 600BC WITH</p>
      <h2 className='uppercase font-semibold text-4xl sm:text-5xl md:6xl lg:text-7xl'>Gym<span className='text-yellow-500 font-medium '> Buddy</span></h2>
     </div>
    <p className='text-sm md:text-base font-light'>join the 24th century method of lifting weights</p>
    <Button  text={"ACCEPT & BEGIN"}></Button>
    </div>
  )

}

export default Hero
