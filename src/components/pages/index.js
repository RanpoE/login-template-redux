import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Main, Login } from "../../pages";
import { auth } from "../../utils/firebase";
import { authUser } from "../../redux/actions/userActions";
import Loader from "../../components/Loader";

export const Index = () => {
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.user)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {

        }, 1000)
        const unsubscribe = auth.onAuthStateChanged(user => {
            // dispatch(authUser(user))
            if (user) {
                dispatch(authUser({
                    logged: true,
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                }))
            }
            // dispatch(authUser({...multiFactor?.user, logged: true}))
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        })
        return unsubscribe;
    }, [dispatch])

    return (
        loading ?
            <Loader /> :
            userDetails?.logged ? <Main /> : <Login />
    )
}