import React, { useEffect } from "react";
import { useSelector } from 'react-redux'

export const About = () => {

    const { email } = useSelector(state => state.user)

    useEffect(() => {
        console.log(email)
    })

    return (
        <h1>This is about page.</h1>
    )
}
