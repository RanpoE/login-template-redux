import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Protected = ({children}) => {
    const userDetails = useSelector(state => state.user)
    if (userDetails?.logged) return children
    return <Navigate to="/" replace /> 
}

export default Protected