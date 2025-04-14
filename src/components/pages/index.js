import React, { useEffect, useState, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Main, Login } from "../../pages";
import { auth } from "../../utils/firebase";
import { authUser } from "../../redux/actions/userActions";
import Loader from "../../components/Loader";
import axios from "axios";
import { fetchSuccess } from "../../redux/actions/postActions";

import { io } from "socket.io-client";

const socket = io("http://localhost:4000")

export const Index = () => {
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    const baseURL = process.env.REACT_APP_API_URL;

    function getPosts() {
        return async function (dispatch) {
            setLoading(true)
            const allData = []
            let res = {}
            let counter = 1
            do {
                res = await axios.get(`${baseURL}/api/v1/gallery?page=${counter}`)
                allData.push(...res.data.data);
                counter += 1;
            } while (res.data.data.length > 0);
            
            console.log(allData)
            dispatch(fetchSuccess(allData))
        }
    }

    useEffect(() => {
        if (!userDetails?.logged) setLoading(false)
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

        socket.on('peers', (data) => console.log(data))

        return () =>  {
            socket.off('peers')
            unsubscribe();

        }
    }, [dispatch])

    return (
        <Suspense fallback={Loader}>
            {userDetails?.logged ? <Main /> : <Login />}
        </Suspense>
    )
}