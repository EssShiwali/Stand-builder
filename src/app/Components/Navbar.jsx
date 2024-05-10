'use client';

import { useState } from 'react';
import { DiZend } from "react-icons/di";
import DropList from '../Components/DropList'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import './Navbar.css'
import dynamic from 'next/dynamic';


const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const DynamicLoginPopup = dynamic(() => import('./Loginpopup'), { ssr: false });
    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div>
            <div className="header">
                <div className="logo"><DiZend /></div>
                <span>abcd@example.com | 937783883</span>
                <div ><button className="header-button ">Get 5 free quotations</button></div>
            </div>
            <nav className="navbar">
                <input type='checkbox' id='menu-click' />
                <label htmlFor="menu-click" className="menu-btn hamburger" onClick={handleClick}>
                    {/* <RxHamburgerMenu className="hamburger" /> */}
                    {clicked ? <RxCross1 /> : <RxHamburgerMenu />}
                </label>
                <div className="nav-links">
                    <div class="dropdown">
                        <button class="dropbtn">EXHIBITION STAND WORLDWIDE
                            <MdOutlineKeyboardArrowDown className='rotate1' />
                        </button>
                        <DropList />
                    </div>
                    <ul>
                        <li className='res-drp'>
                            <input type='checkbox' id='drp-click' />
                            <label htmlFor="drp-click" className="dropbtn res-drpbtn ">
                                EXHIBITION STAND WORLDWIDE
                                <MdOutlineKeyboardArrowDown className='rotate1' />
                                <DropList className="DropList" />
                            </label></li>

                        <li>Home</li>
                        <li>Custom Exhibition Stands</li>
                        <li>Trade Shows</li>
                        <li>Blogs</li>
                    </ul>

                </div>
                {/* <button className="sign-in">Sign in</button> */}
                <DynamicLoginPopup />
            </nav>

        </div>
    )
}

export default Navbar