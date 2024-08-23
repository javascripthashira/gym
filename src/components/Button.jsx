import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='px-8  ml-30 py-4 rounded-md border-[2px] bg-yellow-400 border-yellow-500 border-solid yellowShadow duration-200'>
            <p>{text}</p>
        </button>
    )
}