import React from 'react'
import Gallery from './Gallery'

const Gallaries = () => {
  const images = [
    "https://images.unsplash.com/photo-1681983137356-d8b2bae77153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1681813952538-5fb12a58e448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1669888245224-8fe296e1bc60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682080019175-dcf97dca51d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682070545391-4b141dc6ccd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
  ] 

  return (
    <div className='w-full max-w-7xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5'>
        {
           images ? images.map(img => <Gallery src={img} key={img}/>) : <p>No image</p>
        }
    </div>
  )
}

export default Gallaries