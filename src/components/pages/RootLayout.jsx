import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import React from 'react'
import { useSelector } from 'react-redux'

const RootLayout = () => {
    const theme = useSelector(state => state.theme)

    return (
        <div className={theme ? "dark" : ""}>
        <Navbar />
        <Outlet />
        </div>
    )
}

export default RootLayout