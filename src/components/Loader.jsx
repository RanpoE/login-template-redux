// import { Rings } from "react-loader-spinner";
import { Nani } from '../assets/images'

import React from 'react'

const Loader = () => {
    return (

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <img src={Nani} className="h-24" alt="loading" />
                <p className="text-white font-bold">Loading ...</p>
            </div>
        </section>
    )
}

export default Loader