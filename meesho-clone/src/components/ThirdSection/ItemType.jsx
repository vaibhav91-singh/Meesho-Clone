import React from 'react';
import Styles from './Styles/ItemType.module.css';
import Accessories from '../../assets/Items3Image/Accessories.png';
import Beauty from '../../assets/Items3Image/Beauty.png';
import EthnicWear from '../../assets/Items3Image/EthnicWear.png';
import FootWear from '../../assets/Items3Image/FootWear.png';
import Grocery from '../../assets/Items3Image/Grocery.png';
import HomeDecor from '../../assets/Items3Image/HomeDecor.png';
import MensWear from '../../assets/Items3Image/MensWear.png';
import WesternDresses from '../../assets/Items3Image/WesternDresses.png';

function ItemType() {
    // Data array for categories
    const categories = [
        { name: "Ethnic Wear", img: EthnicWear },
        { name: "Western Dresses", img: WesternDresses },
        { name: "Menswear", img: MensWear },
        { name: "Footwear", img: FootWear },
        { name: "Home Decor", img: HomeDecor },
        { name: "Beauty", img: Beauty },
        { name: "Accessories", img: Accessories },
        { name: "Grocery", img: Grocery }
    ];

    return (
        <div className={Styles.wrapitem}>
            {categories.map((item, index) => (
                <div key={index} className={Styles.itemCard}>
                    <div className={Styles.imageBg}>
                        <img src={item.img} alt={item.name} className={Styles.itemImg} />
                    </div>
                    <p className={Styles.itemName}>{item.name}</p>
                </div>
            ))}
        </div>
    );
}

export default ItemType;