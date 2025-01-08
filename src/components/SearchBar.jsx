import React, { useState } from 'react'

const SearchBar = ({handleChange}) => {
    const [searchTimeout, setSearchTimeout] = useState(null)

    const handleSearchChange = (e) => {
        const { value } = e.target 
        clearTimeout(searchTimeout)
        setSearchTimeout(
            setTimeout(() => {
                handleChange(value)
            }, 500)
        )
    }


    return (
        <div className="flex justify-center items-center w-full h-20 bg-white dark:bg-slate-800">
            <div className="relative w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                            className="w-6 h-6">
                            <path
                                d="M21 21l-4.35-4.35M8 15a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM16 16l4-4">
                            </path>
                        </svg>
                    </button>
                </span>
                <input type="text" className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="Search..." onChange={handleSearchChange}/>
            </div>
        </div>
    )
}

export default SearchBar