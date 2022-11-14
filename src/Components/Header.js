import React from 'react'
import Sidebar from "./Sidebar";

const Header = () => {
    const positionStyle = {
        position: "absolute",
        inset: "0px auto auto 0px",
        margin: "0px",
        transform: "translate(0px, 10px)"
    }
    return (
    <>
        <nav className={"bg-white-400 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"}>

            <div className={"container flex flex-wrap justify-between items-center mx-auto"}>
                <a href="https://flowbite.com/" className={"flex items-center"}>
                    <img src="https://flowbite.com/docs/images/logo.svg" className={"mr-3 h-6 sm:h-9"}
                         alt="Flowbite Logo" />
                        <span
                            className={"self-center text-xl font-semibold whitespace-nowrap dark:text-white"}>Flowbite</span>
                </a>
                <div className={"flex items-center md:order-2"}>
                    <button type="button"
                            className={"flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"}
                            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom">
                        <span className={"sr-only"}>Open user menu</span>
                        <img className={"w-8 h-8 rounded-full"} src="/docs/images/people/profile-picture-3.jpg"
                             alt="user photo" />
                    </button>

                    <div
                        className={"hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"}
                        id="user-dropdown" data-popper-reference-hidden="" data-popper-escaped=""
                        data-popper-placement="bottom"
                        style={positionStyle}>
                        <div className={"py-3 px-4"}>
                            <span className={"block text-sm text-gray-900 dark:text-white"}>Bonnie Green</span>
                            <span
                                className={"block text-sm font-medium text-gray-500 truncate dark:text-gray-400"}>name@flowbite.com</span>
                        </div>

                    </div>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                            className={"inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}
                            aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className={"sr-only"}>Open main menu</span>
                        <svg className={"w-6 h-6"} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

            </div>
        </nav>

        <Sidebar />
    </>

);
}

export default Header