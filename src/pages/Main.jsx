import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import app from '../utils/firebase'

const Main = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await app.auth().signOut().then(() => {
      dispatch(logoutUser())
      navigate('/')
    }).catch((err) => console.error(err))
  }

  return (
    <div>
      <h1>Hello <span style={{ color: 'red' }}>{user.email}</span></h1>
      <p>This is just an ordinary homepage.</p>
      <Button type='button' event={handleLogout} text='Logout' />
    </div>
  )
}

export default Main