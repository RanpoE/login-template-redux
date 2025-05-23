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
    // <Link to={data.photo} target='_blank' rel='noopener noreferrer'>
    <Link to={`/detail/${data?._id}`} >
      <div className='tiles'>
        <div className="tile">
          <img src={data?.photo} alt='gallery' />
          <div className='details'>
            <span>
              <button title='Remove' id={data?._id} className='btn text-red-300 right-0 absolute z-10' onClick={handleDelete}>X</button>
            </span>
            <span className='title'>{data?.title}</span>
            <span className='info'>{data?.caption}
            </span>
          </div>
        </div>
      </div>
    </Link >
  )
}

export default Gallery