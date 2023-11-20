import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Gallery from './Gallery'
import { fetchSuccess } from '../../redux/actions/postActions'
import axios from 'axios'


const Gallaries = () => {
  const dispatch = useDispatch()
  const images = [
    "https://images.unsplash.com/photo-1681983137356-d8b2bae77153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682175904468-1958501d39be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1681813952538-5fb12a58e448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1669888245224-8fe296e1bc60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682080019175-dcf97dca51d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682070545391-4b141dc6ccd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1680466257600-86e0aa02cc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1Mnw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
  ]

  const imahe = [
    {
      src: "https://images.unsplash.com/photo-1681983137356-d8b2bae77153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Hill side",
      info: "Ideal place to live"
    },
    {
      src: "https://images.unsplash.com/photo-1682175904468-1958501d39be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Mountain Pine",
      info: "Hike to the top of the mountain"
    },
    {
      src: "https://images.unsplash.com/photo-1681813952538-5fb12a58e448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Aurora Borealis",
      info: "A natural phenomenon"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1669888245224-8fe296e1bc60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Aster naut",
      info: "Fly me to the moon"
    },
    {
      src: "https://images.unsplash.com/photo-1682080019175-dcf97dca51d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Contenental Breakfast",
      info: "The most important meal of the day"
    },
    {
      src: "https://images.unsplash.com/photo-1682070545391-4b141dc6ccd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      title: "Her",
      info: "A movie by Spike Jonze"
    },
    {
      src: "https://images.unsplash.com/photo-1680466257600-86e0aa02cc64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1Mnw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Ice caps",
      info: "The ice caps are melting"
    },
    {
      src: "https://images.unsplash.com/photo-1606907568152-58fcb0a0a4e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      title: "Moto life",
      info: "Ride or die"
    },
  ]

  function getPosts() {
    return async function (dispatch) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      dispatch(fetchSuccess(res.data))
    }
  }

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      {
        !images.length && (
          <div className='w-full max-w-7xl p-5 pb-10 mb-10 columns-1 space-y-5'>
            <h1 className="text-xl">No image found</h1>
          </div>)
      }
      <section className='w-full max-w  dark:bg-slate-800 dark:shadow-black/10'>
        <div className='w-full max-w-7xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5  dark:bg-slate-800 dark:shadow-black/10'>
          {
            imahe.map((img, idx) => <Gallery data={img} key={idx} />)
          }
        </div>
      </section>
    </>
  )
}

export default Gallaries