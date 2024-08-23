import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExcerciseCard'

const Workout = (props) => { // Corrected here
  const { workout } = props

  return (
    <SectionWrapper header={"welcome to"} title={['The', 'Danger', 'zone ']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => {
          return (
            <ExerciseCard i={i} exercise={exercise} key={i} />
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default Workout
