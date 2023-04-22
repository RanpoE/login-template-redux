import { Link, Outlet } from "react-router-dom";

import React from 'react'

const RootLayout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
}

export default RootLayout