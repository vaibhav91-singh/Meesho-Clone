import React from 'react';
import Styles from './Styles/ThirdAds.module.css';

function ThirdAds() {
  return (<>
    <h3>third ads</h3>
    <div className={Styles.wrapper}>
      <div className={Styles.bannerContainer}>
        {/* Main Banner Image */}
        <img 
          src="https://images.meesho.com/images/marketing/1762433553672.webp" 
          alt="Meesho Offer Banner" 
          className={Styles.bannerImg}
        />
        {/* Clickable Overlay: Download Button */}
        <a 
          href="https://meesho.com/download" 
          target="_blank" 
          rel="noreferrer" 
          className={Styles.downloadOverlay}
        >
          Download Now
        </a>

        {/* Clickable Overlay: Category Buttons */}
        <div className={Styles.categoryOverlays}>
          <button className={Styles.catBtn} onClick={() => console.log('Trending')}></button>
          <button className={Styles.catBtn} onClick={() => console.log('Budget')}></button>
          <button className={Styles.catBtn} onClick={() => console.log('Top Rated')}></button>
          <button className={Styles.catBtn} onClick={() => console.log('Essentials')}></button>
        </div>
      </div>
    </div>
</>  
);
}

export default ThirdAds;