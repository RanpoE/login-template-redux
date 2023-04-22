import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts, updateProduct } from "../redux/actions/productActions";
import reducers from "../redux/reducers";
import { configureStore } from "@reduxjs/toolkit";

const Mock = () => {
    const dispatch = useDispatch()

    const store = configureStore({ reducer: reducers })

    const { allProducts } = store.getState()

    const up = async () => {
        const update = {
            id: 2,
            title: "MOCK",
            category: "sample"
        }
        dispatch(setProducts(update))
    }
    const add = async () => {
        const update = {
            id: 2,
            title: "MOCK UPDATE",
            category: "sd"
        }
        await dispatch(updateProduct(update))
    }
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProducts])


    return (
        <>
            <p>Mock component</p>
            <button onClick={up}>UP</button>
            <button onClick={add}>ADD</button>
            {
                allProducts.map(i => <i key={i.id}>{i.title}</i>)
            }
        </>
    )

}

export default Mock;