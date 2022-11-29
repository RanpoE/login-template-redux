import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { setProducts, updateProduct } from "../redux/actions/productActions";

const Mock = () => {
    const dispatch = useDispatch()

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
        dispatch(updateProduct(update))
    }
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <p>Mock component</p>
            <button onClick={up}>UP</button>
            <button onClick={add}>ADD</button>
        </>
    )

}

export default Mock;