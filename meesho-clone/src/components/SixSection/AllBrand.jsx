import React from 'react'
import Styles from './Styles/AllBrand.module.css'

function AllBrand() {
    const brandLogos = [
        { id: 1, name: "Wild Stone", img: "https://images.meesho.com/images/marketing/1743159363205.webp" },
        { id: 2, name: "Plum", img: "https://images.meesho.com/images/marketing/1743159377598.webp" },
        { id: 3, name: "Nivea", img: "https://images.meesho.com/images/marketing/1743159393231.webp" },
        { id: 4, name: "Himalaya", img: "https://images.meesho.com/images/marketing/1743159415385.webp" },
        { id: 5, name: "Mi", img: "https://images.meesho.com/images/marketing/1744636558884.webp" },
        { id: 6, name: "Bata", img: "https://images.meesho.com/images/marketing/1744636599446.webp" },
        { id: 7, name: "Wow", img: "https://images.meesho.com/images/marketing/1743159302944.webp" },
        { id: 8, name: "Mamaearth", img: "https://images.meesho.com/images/marketing/1743159322237.webp" }
    ];

    return (
        <div className={Styles.AllBrand}>
            <div className={Styles.brandContainer}>
                {/* We render the list twice to create the infinite loop effect */}
                {[...brandLogos, ...brandLogos].map((brand, index) => (
                    <div key={index} className={Styles.brandCard}>
                        <img src={brand.img} alt={brand.name} className={Styles.logoImg} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllBrand