import React, { useEffect } from "react";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "../../redux/reducers";
import { useNavigate } from "react-router-dom";

export const About = () => {
    const navigator = useNavigate()
    const store = configureStore({reducer: reducers})
    
    const { user } = store.getState()

    useEffect(() => {
        console.log(user)
    })

    return (
        <h1>This is about page.</h1>
    )
}
