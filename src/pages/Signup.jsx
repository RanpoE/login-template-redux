import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FormField from '../components/FormField'
import { useDispatch } from "react-redux";
import { authUser } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';


const Signup = () => {
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPass: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setForm({
            email: '',
            password: '',
            confirmPass: ''
        })
        if (form.password !== form.confirmPass) {
            setErrorMessage('Password did not match.')
            return
        }
        try {
            const signup = await auth.createUserWithEmailAndPassword(form.email, form.password)
            dispatch(authUser({ logged: true, email: signup.user.email }))
            navigate('/')
        } catch (error) {
            console.error(error.message)
            setErrorMessage(error.message)
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl underline font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create new account
                        </h1>
                        {errorMessage && <p>{errorMessage}</p>}
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <FormField
                                labelName='Your email'
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
                            <FormField
                                labelName='Confirm password'
                                name='confirmPass'
                                type='password'
                                value={form.confirmPass}
                                handleChange={handleChange}
                                placeHolder='Confirm password'
                            />
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                        </form>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup