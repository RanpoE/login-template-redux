import React from 'react'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { deletePost } from '../../redux/actions/postActions'

const baseURL = process.env.REACT_APP_API_URL

const Gallery = ({ data }) => {
  const handleDelete = async (e) => {
    e.preventDefault()
    const id = e.target.id
    await axios.delete(`${baseURL}/api/v1/gallery/${id}`).then(res => {
      dispatch(deletePost(id))
    }).catch(err => console.error(err))
  }

  const dispatch = useDispatch()

  return (
    <Link to={data.photo} target='_blank' rel='noopener noreferrer'>
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
    </Link>
  )
}

export default Gallery