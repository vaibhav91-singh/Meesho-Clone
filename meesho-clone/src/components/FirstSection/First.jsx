import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainHeader from './MainHeader.jsx'
// Import your pages so the routes actually work
import Cart from './Cart.jsx'
import AuthPage from './AuthPage.jsx'
import Investor from './Investor.jsx'

function First() {
    return (
        <Router>
            <MainHeader />
            
            {/* You need this section to tell React what to show when links are clicked */}
            <Routes>
                {/* <Route path="/" element={<div className="p-10 text-center">Home Page Content</div>} /> */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/investor" element={<Investor />} />
            </Routes>
        </Router>
    )
}

export default First