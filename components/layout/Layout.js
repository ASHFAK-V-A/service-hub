import React from 'react'
import AppBar from './AppBar'
import Footer from './Footer'

function Base({ children }) {
    return (
        <div>
            <AppBar />
            {children}
            <Footer />
        </div>
    )
}

export default Base