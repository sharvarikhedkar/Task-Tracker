import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
    return (
        <footer>
            <p>
                copyright &copy; 2021
            </p>
            {location.pathname !== '/about' && (
                <Link to = "/about">About</Link>
            )
            }
            
        </footer>
    )
}
export default Footer