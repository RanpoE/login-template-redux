import React from 'react'

import { useSelector } from 'react-redux'

import Gallery from './Gallery'
import Button from '../Button/Button'
import CreatePost from '../Modal/CreatePost'
import SearchBar from '../SearchBar'


const Gallaries = () => {
  // const x = useSelector(state => state.post)
  // console.log(x)

  const posts = useSelector(state => state.post)
  const [filteredPosts, setFilteredPosts] = React.useState(posts)
  const [openCreateForm, setOpenCreateForm] = React.useState(false)

  const handleFilter = (e) => {
    console.log(e, "ini e")
    // if (e === '') {
    //   setFilteredPosts(posts)
    //   return
    // }
    const filtered = posts.data.filter(post => {
      console.log(e.toLowerCase(), "ini e.toLowerCase()")
      return post.title.toLowerCase().includes(e.toLowerCase())
    })

    setFilteredPosts({ data: filtered })
  }

  const handleFormState = () => setOpenCreateForm(prev => !prev)

  return (
    <>
      <section className='w-full max-w pt-20 min-h-screen dark:bg-slate-800 dark:shadow-black/10'>
        <div className='max-w-7xl mx-auto px-5'>
          {/* <Link to="/create"> */}
            <Button className='font-bold' event={handleFormState} variant='primary' text={'Add image'} />
          {/* </Link> */}
        </div>
        <div className='max-w-7xl mx-auto px-5'>
          <SearchBar handleChange={handleFilter} />
        </div>
        <div className='w-full max-w-7xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5 dark:bg-slate-800 dark:shadow-black/10'>
          {
            filteredPosts?.data?.length ?
              filteredPosts.data.map((img, idx) => <Gallery data={img} key={idx} />) :
              <h1 className='dark:text-white'>No result found</h1>
          }
        </div>
      </section>
      <CreatePost modalState={openCreateForm} handleClose={handleFormState} />
    </>
  )
}

export default Gallaries