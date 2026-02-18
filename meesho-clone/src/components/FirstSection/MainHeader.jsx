import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, ShoppingBag } from 'lucide-react'; // Added ShoppingBag
import Styles from './Styles/MainHeader.module.css';
function MainHeader() {
    const [isSearchOpen, setIsSearchOpen]= useState(false);
   const popularSearches = [
        "saree", "short kurti", "kurti", "earring", "bangle", 
        "watch", "shoes", "tshirt", "kurti set", "top for women", 
        "slipper", "top", "blouse", "kurti set for women"
    ];
    return (
        <header className={Styles.header}>
            <div className={Styles.container}>

                {/* Left: Logo & Search */}
                <div className={Styles.logoSearch}>
                    <Link to="/" className={Styles.logo}>
                        meesho
                    </Link>

                    {/* Search Bar */}
                    <div className={Styles.searchContainer}>
                        <div className={Styles.searchArea}>
                            <Search size={18} color="#666" />
                            <input
                                type="search"
                                className={Styles.searchInput}
                                placeholder="Try Saree, Kurti or Search by Product Code"
                                onFocus={() => setIsSearchOpen(true)}
                                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)} 
                            />
                        </div>
                        {isSearchOpen && (
                            <div className={Styles.searchDropdown}>
                                <h4 className={Styles.dropdownTitle}>Popular Searches</h4>
                                <div className={Styles.tagContainer}>
                                    {popularSearches.map((item, index) => (
                                        <div key={index} className={Styles.searchTag}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>




                </div>

                {/* Right: Navigation Links */}
                <nav className={Styles.navLinks}>
                    <Link to="/supplier" className={Styles.navItem}>
                        <span>Become a Supplier</span>
                    </Link>

                    <Link to="/investor" className={Styles.navItem}>
                        <span className={Styles.investorName}>Investor Relations</span>
                    </Link>

                    {/* Profile Section */}
                    <div className={Styles.profileContainer}>
                        <Link to="/profile" className={Styles.profileCartItem}>
                            <User size={20} />
                            <span className={Styles.profileName}>Profile</span>
                        </Link>

                        {/* The Hover Menu */}
                        <div className={Styles.dropdownMenu}>
                            <h3 className={Styles.helloUser}>Hello User</h3>
                            <p className={Styles.subText}>To access your Meesho account</p>


                            <Link to="/auth" className={Styles.signInBtn}>
                                <button className={Styles.signUpBtn}>Sign Up</button>

                            </Link>

                            <div className={Styles.divider}></div>

                            <div className={Styles.menuItem}>
                                <ShoppingBag size={18} />
                                <span>My Orders</span>
                            </div>

                            <div className={Styles.divider}></div>

                            <div className={Styles.menuItem}>
                                <span>Delete Account</span>
                            </div>
                        </div>
                    </div>

                    <Link to="/cart" className={Styles.profileCartItem}>
                        <ShoppingCart size={20} />
                        <span className={Styles.cartName}>Cart</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default MainHeader;