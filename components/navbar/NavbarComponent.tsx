'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { MenuList, MenuItem } from './menu';

const NavbarComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const renderLink = (menuItem: MenuItem) => {
        const isExternal = menuItem.path.startsWith('http');
        if (isExternal) {
            return (
                <Link
                    href={menuItem.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block py-2 px-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:p-0 ${menuItem.active ? 'bg-blue-700' : ''}`}
                >
                    {menuItem.name}
                </Link>
            );
        } else {
            return (
                <Link href={menuItem.path} passHref>
                    <div className={`block py-2 px-3 rounded hover:bg-blue-500 md:hover:bg-transparent md:border-0 md:p-0 ${menuItem.active ? 'bg-blue-700' : ''}`}>
                        {menuItem.name}
                    </div>
                </Link>
            );
        }
    };

    return (
        <header className="sticky top-0 bg-primary">
            <nav className="border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo and name start here */}
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image
                            src="https://istad.co/resources/img/CSTAD_120.png" // change it later
                            className="h-12"
                            alt="cstad Logo"
                            width={50}
                            height={50}
                        />
                        <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">C S T A D</span>
                    </Link>
                    {/* Logo and name end here */}

                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-600"
                        aria-controls="navbar-multi-level"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>

                    {/* Menu Start here */}
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-multi-level">
                        <ul className="bg-primary flex flex-col font-medium p-4 md:p-0 mt-4 text-white border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            {MenuList.map((menuItem) => (
                                <li key={menuItem.name}>
                                    {renderLink(menuItem)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Menu End here */}
                </div>
            </nav>
        </header>
    );
};

export default NavbarComponent;
