import React, { useState } from 'react'
import logo from '../assest/logo.png'
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleShowMenu = ()=>{
        setShowMenu(preve => !preve)
    }
    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
            {/* desktop */}
            <div className='flex items-center h-full justify-between'>
                <Link to={'/'}>
                    <div className='h-10'>
                        <img className=' h-full' src={logo} alt='' />
                    </div>
                </Link>
                <div className='flex items-center gap-4 md:gap-7'>
                    <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                        <Link to={'/'} >Home</Link>
                        <Link to={'menu'} >Menu</Link>
                        <Link to={'about'} >About</Link>
                        <Link to={'contact'} >Contact</Link>
                    </nav>
                    <div className='text-2xl text-slate-600  relative' >
                        <BsCartFill />
                        <div className='absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center'>0</div>
                    </div>
                    <div className=' text-slate-600 'onClick={handleShowMenu}>
                        <div className='text-2xl cursor-pointer' >
                            <HiOutlineUserCircle />
                        </div>
                        {
                            showMenu && (
                                <div className='absolute right-2 bg-white py-3 px-2 shadow drop-shadow-md flex flex-col'>
                                    <Link to={'newproduct'} className='whitespace-nowrap cursor-pointer'>New Product</Link>
                                    <Link to={'login'} className='whitespace-nowrap cursor-pointer'>Login</Link>
                                </div>
                            )
                        }

                    </div>
                </div>

            </div>


            {/* mobile */}
        </header>
    )
}

export default Header