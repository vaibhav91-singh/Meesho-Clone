import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, ShoppingBag } from 'lucide-react';
import Styles from './Styles/Clothes.module.css';

const ClothesItem = () => {
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);

    const categories = [
        "Popular", "Kurti, Saree & Lehenga", "Women Western", "Lingerie", "Men",
        "Kids & Toys", "Home & Kitchen", "Beauty & Health", "Jewellery & Accessories"
    ];

    return (
        <div className={Styles.wrapper}>
            {/* --- CATEGORY BAR WITH MEGA MENU --- */}
            <nav className={Styles.categoryBar}>
                <div className={Styles.container}>
                    <ul className={Styles.catList}>
                        {categories.map((cat, index) => (
                            <li 
                                key={index} 
                                className={index === 0 ? Styles.activeCategory : Styles.catLink}
                                onMouseEnter={() => setActiveMegaMenu(cat)}
                                onMouseLeave={() => setActiveMegaMenu(null)}
                            >
                                {cat}
                                
                                {/* Mega Menu Content */}
                                {activeMegaMenu === cat && (
                                    <div className={Styles.megaMenu}>
                                        <div className={Styles.megaColumn}>
                                            <h5 className={Styles.megaTitle}>Featured On Meesho</h5>
                                            <p>Smartphones</p>
                                            <p>Top Brands</p>
                                            <p>Shimla Apples</p>
                                        </div>
                                        <div className={Styles.megaColumn}>
                                            <h5 className={Styles.megaTitle}>All {cat}</h5>
                                            <p>Jewellery</p>
                                            <p>Footwear</p>
                                            <p>Beauty & Personal Care</p>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default ClothesItem;