import React, { useState } from 'react';
import "./Nav.css";
// if it's one level up in a styles folder


import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";





function Nav({ onCategoryChange, selectedCategory, onViewChange }) {
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setVisible(prev => !prev);
    };

    const handleCategoryClick = (category) => {
        console.log(`Clicked on category: ${category}`);
        onCategoryChange(category);
    };

    return (
        <div id="Nav">
            {visible && (
                <div className="hamburger">
                    <div className="ham1" onClick={() => onViewChange('login')}>Login</div>
                    <div className="ham1" onClick={() => onViewChange('signup')}>SignUp</div>
                    <div className="ham1" onClick={() => onViewChange('listyourhome')}>List Your Home</div>
                    <div className="ham1" onClick={() => onViewChange('helpcenter')}>Help Center</div>
                </div>
            )}
            <div className="nav1">
                <div className="logo">
                    <img src="/p.jpeg" alt="Logo" />
                    <h1>Private Property Rental</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Destination' />
                    <button>
                        <CiSearch />
                    </button>
                </div>
                <div className="ham">
                    <button id='btn1'>List Your Home</button>
                    <button id="btn2" onClick={toggleMenu}>
                        <GiHamburgerMenu id='svg1' />
                        <CgProfile id='svg2' />
                    </button>
                </div>
            </div>
            <div className="nav2">
                <div className="svg11" onClick={() => handleCategoryClick('trending')}>
                    <MdOutlineWhatshot />
                    <h3>Trending</h3>
                </div>
                <div className="svg11" onClick={() => handleCategoryClick('houses')}>
                    <GiFamilyHouse />
                    <h3>Houses</h3>
                </div>
                <div className="svg11" onClick={() => handleCategoryClick('rooms')}>
                    <MdBedroomParent />
                    <h3>Rooms</h3>
                </div>
                <div className="svg11" onClick={() => handleCategoryClick('farm-houses')}>
                    <PiFarm />
                    <h3>Farm Houses</h3>
                </div>
                <div className="svg11" onClick={() => handleCategoryClick('pool-houses')}>
                    <MdOutlinePool />
                    <h3>Pool Houses</h3>
                </div>
                <div className="svg11" onClick={() => handleCategoryClick('tent-houses')}>
                    <LuTentTree />
                    <h3>Tent Houses</h3>
                </div>
                <div className="svg11" onClick={() => handleCategoryClick('cabins')}>
                    <GiWoodCabin />
                    <h3>Cabins</h3>
                </div>
                <div className="svg11" onClick={() => handleCategoryClick('shops')}>
                    <SiHomeassistantcommunitystore />
                    <h3>Shops</h3>
                </div>
                <div className="svg11" onClick={() => handleCategoryClick('forest-houses')}>
                    <FaTreeCity />
                    <h3>Forest Houses</h3>
                </div>
            </div>
        </div>
    );
}

export default Nav;
