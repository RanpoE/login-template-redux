import React from 'react'

const Gallery = ({data}) => {
  return (
    <div className='tiles'>
      <a className="tile" href='/'>
        <img src={data.src} alt='gallery' />
    
      <div className='details'>
        <span className='title'>{data.title}</span>
        <span className='info'>{data.info}</span>
      </div>
      </a>
    </div>
  )
}

export default Gallery