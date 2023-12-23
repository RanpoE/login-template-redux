import React from "react";
import { useSelector } from 'react-redux'

export const About = () => {

    const { email } = useSelector(state => state.user)


    return (
        <div className="w-full max-w-7xl pt-20 pb-10 mb-10 columns-1 space-y-5">
            <h1 className="text-xl">Welcome, {email}</h1>
            <p>
                This is an about page.
            </p>
        </div>
    )
}
