import React from 'react'
import axios from 'axios'

const Gallery = ({ data }) => {
  const handleDelete = (e) => {
    e.preventDefault()
    const id = e.target.id
    console.log(e.target)

    axios.delete(`http://localhost:8080/api/v1/gallery/${id}`)
  }


  return (
    <div className='tiles'>
      <div className="tile">
        <img src={data.photo} alt='gallery' />

        <div className='details'>
          <span className='title'>{data.title}</span>
          <span className='info'>{data.caption}
            <br/><button id={data._id} className='btn' onClick={handleDelete}>Delete</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Gallery