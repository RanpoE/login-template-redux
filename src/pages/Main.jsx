import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { logoutUser } from '../redux/actions/userActions'
// import { useNavigate } from 'react-router-dom'
// import app from '../utils/firebase'
import Navbar from '../components/Navbar'
import Gallaries from '../components/Gallery/Gallaries'

const Main = () => {
  // const user = useSelector(state => state.user)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const handleLogout = async () => {
  //   await app.auth().signOut().then(() => {
  //     dispatch(logoutUser())
  //     navigate('/')
  //   }).catch((err) => console.error(err))
  // }

  return (
    <div>
      <Navbar />
      <Gallaries />
    </div>
  )
}

export default Main