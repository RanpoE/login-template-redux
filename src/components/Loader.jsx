import { Rings } from "react-loader-spinner";

import React from 'react'

const Loader = () => {
    return (

        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Rings
                    height="80"
                    width="80"
                    color="#4fa94d"
                    radius="6"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="rings-loading"
                />
            </div>
        </section>
    )
}

export default Loader