import React from 'react'

const NotFound = ({ style }) => {
    console.log(style)
    return (
        <div className={style}>
            <h1 className='text-2xl'>
                Post not found
            </h1>
        </div>
    )
}

export default NotFound
