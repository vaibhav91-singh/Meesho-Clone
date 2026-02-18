import React from 'react'
import Styles from './Styles/Footer.module.css'
// Note: Replace these with your actual image paths if local
const GOOGLE_PLAY = "https://images.meesho.com/images/powertrace/google-play-button.png";
const APP_STORE = "https://images.meesho.com/images/powertrace/app-store-button.png";

function FooterContent() {
  return (
    <footer className={Styles.footerWrapper}>
      <div className={Styles.container}>
        
        {/* Section 1: Brand & App Downloads */}
        <div className={Styles.columnLarge}>
          <h2 className={Styles.footerTitle}>Shop Non-Stop on Meesho</h2>
          <p className={Styles.subText}>Trusted by crores of Indians</p>
          <p className={Styles.subText}>Cash on Delivery</p>
          <div className={Styles.appButtons}>
            <img src={GOOGLE_PLAY} alt="Get it on Google Play" className={Styles.storeBtn} />
            <img src={APP_STORE} alt="Available on the App Store" className={Styles.storeBtn} />
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className={Styles.column}>
          <ul className={Styles.linkList}>
            <li>Careers</li>
            <li>Become a supplier</li>
            <li>Hall of Fame</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Section 3: Legal Links */}
        <div className={Styles.column}>
          <ul className={Styles.linkList}>
            <li>Legal and Policies</li>
            <li>Meesho Tech Blog</li>
            <li>Notices and Returns</li>
          </ul>
        </div>

        {/* Section 4: Socials & Contact */}
        <div className={Styles.columnMedium}>
          <h3 className={Styles.columnHeading}>Reach out to us</h3>
          <div className={Styles.socialIcons}>
            {/* Using standard FontAwesome or simple spans for this demo */}
            <span className={Styles.socialIcon}>f</span>
            <span className={Styles.socialIcon}>i</span>
            <span className={Styles.socialIcon}>y</span>
            <span className={Styles.socialIcon}>l</span>
            <span className={Styles.socialIcon}>t</span>
          </div>
        </div>

        {/* Section 5: Address */}
        <div className={Styles.columnLarge}>
          <h3 className={Styles.columnHeading}>Contact Us</h3>
          <p className={Styles.addressText}>
            Meesho Technologies Private Limited<br/>
            CIN: U62099KA2024PTC186568<br/>
            3rd Floor, Wing-E, Helios Business Park,<br/>
            Kadubeesanahalli Village, Varthur Hobli,<br/>
            Outer Ring Road Bellandur, Bangalore,<br/>
            Bangalore South, Karnataka, India, 560103<br/>
            E-mail address: query@meesho.com<br/>
            © 2015-2026 Meesho.com
          </p>
        </div>

      </div>
    </footer>
  )
}

export default FooterContent