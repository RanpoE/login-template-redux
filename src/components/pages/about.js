import React, { useEffect } from "react";
import { useSelector } from 'react-redux'

export const About = () => {

    const { email } = useSelector(state => state.user)

    useEffect(() => {
        console.log(email)
    })

    return (
        <div className="w-full max-w-7xl p-5 pb-10 mb-10 columns-1 space-y-5">
            <h1 className="text-xl">About page</h1>
            <p>
                This is an about page.
            </p>
        </div>
    )
}
