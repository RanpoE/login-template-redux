import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../redux/actions/themeActions'
import { logoutUser } from '../redux/actions/userActions'
import { useNavigate, Link } from 'react-router-dom'
import { AiFillSun, AiFillMoon } from "react-icons/ai";
import app from '../utils/firebase'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    // const user = useSelector(state => state.user)
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await app.auth().signOut().then(() => {
            dispatch(logoutUser())
            navigate('/')
        }).catch((err) => console.error(err))
    }

    return (
        <nav
            className="flex-no-wrap absolute flex w-full items-center justify-between bg-neutral-100 py-2 shadow-md shadow-black/5 dark:bg-slate-800 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
            data-te-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <button
                    className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    data-te-collapse-init
                    data-te-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="[&>svg]:w-7">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-7 w-7">
                            <path
                                fillRule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
                <div
                    className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                    id="navbarSupportedContent1"
                    data-te-collapse-item>
                    <Link
                        className="mb-4 mr-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                        to="/">
                        <img
                            src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                            style={{ height: '15px' }}
                            alt=""
                            loading="lazy" />
                    </Link>
                    <ul
                        className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                        data-te-navbar-nav-ref>
                        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                            <Link
                                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                                to="/"
                                data-te-nav-link-ref
                            >Gallery</Link>
                        </li>
                        <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                            <Link
                                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                to={"/about"}
                                data-te-nav-link-ref
                            >About</Link>
                        </li>
                    </ul>
                </div>
                <div className="relative flex items-center">
                    <button
                        className="mr-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        onClick={() => { dispatch(toggleDarkMode()) }}
                    >   
                        <span className="[&>svg]:w-5">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg> */}
                            {
                                theme ? <AiFillSun color="yellow" /> : <AiFillMoon />
                            }
                        </span>
                    </button>
                    <div className="relative">
                        <p
                            className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                            onClick={() => setToggle(!toggle)}
                            id="dropdownMenuButton2"
                            role="button"
                            data-te-dropdown-toggle-ref
                            aria-expanded="false">
                            <img
                                src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                                className="rounded-full"
                                style={{ height: '25px', width: '25px' }}
                                alt=""
                                loading="lazy" />
                        </p>

                        <div className={`absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg ${!toggle ? "hidden" : ""}`}>
                            <div className="p-2">
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                >
                                    Update profile
                                </a>
                                <a
                                    href="/"
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                >
                                    View profile
                                </a>
                                <button
                                    onClick={handleLogout}
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                                >   Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar