import React from 'react'
import axios from 'axios'
import { deletePost } from '../../redux/actions/postActions'
import { useDispatch } from 'react-redux'

const Gallery = ({ data }) => {
  const handleDelete = async (e) => {
    e.preventDefault()
    const id = e.target.id
    console.log(e.target)
    await axios.delete(`http://localhost:8080/api/v1/gallery/${id}`).then(res => {
      console.log(res)
      dispatch(deletePost(id))
    }).catch(err => console.log(err))
  }

  const dispatch = useDispatch()

  return (
    <div className='tiles'>
      <div className="tile">
        <img src={data.photo} alt='gallery' />

        <div className='details'>
          <span className='title'>{data.title}</span>
          <span className='info'>{data.caption}
            <br /><button title='Remove' id={data._id} className='btn text-red-300' onClick={handleDelete}>X</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Gallery