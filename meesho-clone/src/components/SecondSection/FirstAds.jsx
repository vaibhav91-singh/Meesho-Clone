import firstimage from '../../assets/Ads/FirstBanner.png'
import Styles from './Styles/FirstAdd.module.css'
import React from 'react'

function FirstAds() {
    return (
        <>
            <div className={Styles.wrapper}>
            <img
                src={firstimage}
                alt="Ads Banner"
                className={Styles.ads} 
            />
        </div>
            
        </>
    )
}

export default FirstAds