import React from 'react';
import Styles from './Styles/AuthPage.module.css';

function AuthPage() {
    return (
        <div className={Styles.pageWrapper}>
            <div className={Styles.loginCard}>
                {/* Header Image Section */}
                <div className={Styles.banner}>
                    <img 
                        src="https://images.meesho.com/images/marketing/1661417516766.webp" 
                        alt="Meesho Banner" 
                    />
                </div>

                {/* Form Section */}
                <div className={Styles.formContent}>
                    <h2 className={Styles.title}>Sign Up to view your profile</h2>
                    
                    <div className={Styles.inputContainer}>
                        <div className={Styles.countrySelect}>
                            <span className={Styles.label}>Country</span>
                            <span className={Styles.code}>IN +91</span>
                        </div>
                        <div className={Styles.phoneInput}>
                            <input type="tel" placeholder="Phone Number" maxLength="10" />
                        </div>
                    </div>

                    <button className={Styles.continueBtn}>Continue</button>

                    <p className={Styles.footerText}>
                        By continuing, you agree to Meesho's <br />
                        <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;