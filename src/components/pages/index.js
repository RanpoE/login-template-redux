import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Main, Login } from "../../pages";
import { auth } from "../../utils/firebase";
import { authUser } from "../../redux/actions/userActions";
import Loader from "../../components/Loader";
import axios from "axios";
import { fetchSuccess } from "../../redux/actions/postActions";

export const Index = () => {
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.user)
    const [loading, setLoading] = useState(true)

    function getPosts() {
        return async function (dispatch) {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(fetchSuccess(res.data))
        }
    }

    useEffect(() => {
        setTimeout(() => {

        }, 500)
        const unsubscribe = auth.onAuthStateChanged(user => {
            // dispatch(authUser(user))
            if (user) {
                dispatch(authUser({
                    logged: true,
                    email: user.email,
                    displayName: user.displayName,
                    uid: user.uid,
                }))
                dispatch(getPosts())
            }
            // dispatch(authUser({...multiFactor?.user, logged: true}))
            setTimeout(() => {
                setLoading(false)
            }, 1000);
        })
        return unsubscribe;
    }, [dispatch])

    return (
        loading ?
            <Loader /> :
            userDetails?.logged ? <Main /> : <Login />
    )
}