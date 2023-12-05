import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
// import { useSelector } from 'react-redux'


const Gallaries = () => {
  // const x = useSelector(state => state.post)
  // console.log(x)
  const [data, setData] = useState([])
  const fetchImages = async () => {
    axios.get('http://localhost:8080/api/v1/gallery')
      .then(res => setData(res.data.data))
      .catch(err => console.log(err))

  }
  useEffect(() => {
    fetchImages()
  }, [])

  const posts = useSelector(state => state.post)
  console.log(posts, "ini posts")

  return (
    <>
      {
        !posts?.data?.length ? (
          <section className='w-full dark:bg-slate-800 flex justify-center items-center h-screen'>
            <Link to="/create">
              <Button className='absolute top-5 right-5' variant='primary' text={'Add image'} />
            </Link>
          </section>) :

          <section className='w-full max-w  dark:bg-slate-800 dark:shadow-black/10'>
            <Link to="/create">
              <Button className='absolute top-5 right-5' variant='primary' text={'Add image'} />
            </Link>
            <div className='w-full max-w-7xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5 dark:bg-slate-800 dark:shadow-black/10'>
              {
                posts.data.map((img, idx) => <Gallery data={img} key={idx} />)
              }
            </div>
          </section>
      }
    </>
  )
}

export default Gallaries