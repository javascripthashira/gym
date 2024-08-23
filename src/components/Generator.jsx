import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swolder'
import Button from './Button'


function Header(props) {
    const {index,title,description} = props
return(
    <div className='flex text-left flex-col gap-4 '>
    <div className='flex items-center gap-2'>
    <p className='flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold bg-yellow-100'>{index}</p>
    <h4 className='text-lg sm:text-2xl md:text-3xl'>{title}</h4>
   </div>
   <p className='text-sm sm:text-base '>{description}</p>
    </div>
) 
}


const Generator = (props) => {
  const { muscles, goal,setMuscles, poison, setPoison, setGoal, updateWorkout } = props
  const[showModal, setShowModal] = useState(false);
  
  function toggleModal(){
    setShowModal(!showModal)

   
  }
   function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModal(false)
        }

    }
  return (
   <SectionWrapper header={"generate your workout"} title={['its','huge',"0'clock "]}>
   <Header index={'01'} title={'pick your poison'} description={'sellect you work'}/>
  <div className='grid grid-cols-2 sm:grid-cols-4 gap-4  '>
    {Object.keys(WORKOUTS).map((type, typeIndex) => {
  return (
    
    <div key={typeIndex}>
      <button onClick={()=>{setPoison(type), setMuscles([''])} }className='w-36 bg-yellow-300 border border-yellow-600 py-4 rounded-lg duration-200 hover:bg-yellow-700' ><p className='capitalize '>{type.replaceAll("_"," ")}</p></button>
    </div>
  );
})}
  </div>
   <Header index={'02'} title={'pick muscles'} description={'sellect you work'}/>
  <div className={'bg-yellow-300 border border-solid rounded-lg flex flex-col '  }>
    <button onClick={toggleModal} className=' realative p3 flex items-center justify-center'>
    
    <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')} <i class="fa fa-caret-down" aria-hidden="true"></i> </p>
    
     
    </button>
 
 {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button onClick={() => {
                                    updateMuscles(muscleGroup)
                                }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}>
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            )
                        })}
                    </div>
                )}

   
    
 </div>
 <Header index={'03'} title={'become juggernaut'} description={'select objective'}/>
  <div className='grid  grid-cols-3  gap-20 sm:grid-cols-4  '>
    {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
  return (    
    <div key={schemeIndex}>
      <button onClick={() => {
                            setGoal(scheme)
                        }} className={'bg-yellow-500 h-20 border  duration-200 hover:border-yellow-600 py-3 rounded-lg px-4 ' + (scheme === goal ? ' border-blue-600' : ' border-blue-400')} key={schemeIndex}>
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
    </div>
  );

})}
  </div>
  
      <Button func={updateWorkout} text={"Formulate"}></Button>
 </SectionWrapper>
 
  )
}

export default Generator
