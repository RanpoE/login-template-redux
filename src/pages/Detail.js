import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function Detail() {
    const params = useParams();
    const posts = useSelector(state => state.post)
    const [detail] = useState(posts?.data?.find(post => post._id === params.id))

    const styleStr = "w-full max-w-7xl pt-20 pb-10 mb-10 space-y-5 mx-auto"

    if (!detail) return (<div className={styleStr}>Invalid ID provided.</div>)
    return (
        <div className="flex flex-col md:flex-row pt-20">
            <div className='md:w-2/3'>
                <div class="relative">
                    <a href={detail.photo}>
                        <img src={detail.photo} alt={detail.caption} class="inset-0 w-full h-[420px] object-cover" loading="lazy" />
                    </a>
                </div>
            </div>
            <div className='md:w-1/3 p-2 text-center'>
                    <h1 class="text-lg font-semibold text-slate-900">
                        {detail.caption}
                    </h1>
                    <div class="text-sm font-medium text-slate-700 mt-2">
                        Created by: <code>{detail.user}</code>
                    </div>
            </div>

            {/* <div class="flex font-sans mt-10 max-sm:flex-col">
                <div class="w-screen relative">
                    <a href={detail.photo}>
                        <img src={detail.photo} alt={detail.caption} class="absolute inset-0 w-full h-[420px] object-cover" loading="lazy" />
                    </a>
                </div>
                <form class="flex p-2 max-sm:h-screen">
                    <div class="flex flex-wrap mt-24">
                        <h1 class="text-lg font-semibold text-slate-900">
                            {detail.caption}
                        </h1>
                        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            Created by: <code>{detail.user}</code>
                        </div>
                    </div>
                    <div class="flex space-x-4 mb-6 mt-10 text-sm font-medium">
                        <div class="flex-auto flex space-x-4">
                            <Link to="/">
                                <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                    Follow
                                </button>
                            </Link>
                            <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div> */}
        </div>
    )
}

export default Detail