import React from 'react'
import Styles from './Styles/Product.module.css'
import Footwear from '../../assets/Brands/Footwear.png'
import Personalcare from '../../assets/Items3Image/Beauty.png'
import Electronics from '../../assets/Brands/Electronics.png'
import Makeup from '../../assets/Brands/Mkaeup.png'
import Smartphones from '../../assets/Brands/SmartPhones.png'
import Menperfume from '../../assets/Brands/MenPerfume.png'
import Bags from '../../assets/Brands/Bags.png'
import Books from '../../assets/Brands/Books.png'



function Product() {
    const brandCategories = [
        { id: 1, title: "Personal Care", img: Personalcare },
        { id: 2, title: "Electronics", img: Electronics },
        { id: 3, title: "Makeup", img: Makeup },
        { id: 4, title: "Smart Phones", img: Smartphones },
        { id: 5, title: "Men Perfume", img: Menperfume },
        { id: 6, title: "Bags", img: Bags },
        { id: 7, title: "Footwear", img: Footwear },
        { id: 8, title: "Book", img: Books}
    ];

    return (
        <section className={Styles.wrapproduct}>
            <div className={Styles.header}>
                <div className={Styles.titleGroup}>
                    <h2 className={Styles.mainTitle}>Original Brands</h2>
                    <span className={Styles.verifiedBadge}>✓</span>
                </div>
                <button className={Styles.viewAll}>VIEW ALL &gt;</button>
            </div>

            <div className={Styles.productGrid}>
                {brandCategories.map((item) => (
                    <div key={item.id} className={Styles.card}>
                        <div className={Styles.imageContainer}>
                            <img src={item.img} alt={item.title} className={Styles.productImg} />
                        </div>
                        <div className={Styles.label}>
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Product