import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormField from '../components/FormField'
import { auth } from '../utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { Moon, Sun } from '../assets/images'
import { authUser } from '../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'
import { toggleDarkMode } from '../redux/actions/themeActions'
import  Button  from '../components/Button/Button'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const theme = useSelector(state => state.theme)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { email, password } = form
      const res = await auth.signInWithEmailAndPassword(email, password)
      dispatch(authUser({ logged: true, email: res.user.email }))
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
    setForm({
      email: '',
      password: ''
    })
  }

  return (
    <div className='w-full p-5 pb-10 mb-10 columns-1 space-y-5 dark:bg-slate-800'>
      <section className="bg-gray-50 dark:bg-slate-800 dark:shadow-black ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-800 dark:shadow-black/10">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className='flex w-full text-white justify-between'>
                <h1 className="text-xl underline font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
                </h1>
                <img className='dark:color-yellow-100 w-8 h-8 cursor-pointer' alt='toggle' src={theme ? Sun : Moon} onClick={() => dispatch(toggleDarkMode())} />
              </div>
              {/* <p className='text-white bg-red-400 p-1 rounded-md'>ERROR HERE</p> */}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <FormField
                  labelName='Username or Email'
                  name='email'
                  type='text'
                  value={form.email}
                  handleChange={handleChange}
                  placeHolder='name@company.com'
                />
                <FormField
                  labelName='Password'
                  name='password'
                  type='password'
                  value={form.password}
                  handleChange={handleChange}
                  placeHolder='••••••••'
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <Button type='submit' variant="primary w-full" text='Log in' />
                {/* <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button> */}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login