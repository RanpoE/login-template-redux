import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Detail() {
    const params = useParams();
    const posts = useSelector(state => state.post)
    const [detail] = useState(posts?.data?.find(post => post._id === params.id))

    const styleStr = "w-full max-w-7xl pt-20 pb-10 mb-10 columns-1 space-y-5 mx-auto"

    if (!detail) return (<div className={styleStr}>Invalid ID provided.</div>)
    return (
        <div className={styleStr}>
            <div class="flex font-sans">
                <div class="flex-none w-48 relative">
                    <img src={detail.photo} alt={detail.caption} class="absolute inset-0 w-full h-[200px] object-cover" loading="lazy" />
                </div>
                <form class="flex-auto p-6">
                    <div class="flex flex-wrap">
                        <h1 class="flex-auto text-lg font-semibold text-slate-900">
                            {detail.caption}
                        </h1>
                        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                            {detail.user}
                        </div>
                    </div>
                    <div class="flex space-x-4 mb-6 mt-10 text-sm font-medium">
                        <div class="flex-auto flex space-x-4">
                            <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                                Follow
                            </button>
                            <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Detail