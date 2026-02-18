import React from 'react'
import { Van } from 'lucide-react'
import { IndianRupee } from 'lucide-react'
import { Undo2 } from 'lucide-react'
import Styles from './Styles/Offer.module.css'

function Offer() {
    return (
        <>
        <div className={Styles.return}>
            <div className={Styles.line}>
            <div className={Styles.content}> <li><Undo2 /> 7 Days Easy Return</li>
            <li> <Van /> Cash on Delivery</li>
            <li><IndianRupee /> Lowest Price</li></div>
           
            </div>
        </div>
        </>
    )
}

export default Offer