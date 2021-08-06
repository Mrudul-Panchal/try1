import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
    return (
        <div id="not found">
            <div className="not found">
                <div className="notfound-404">
                    <h1>404</h1>
                    </div>
                    <h2>Page not found</h2>

                    <NavLink to="/"> Back to Home </NavLink>
                
            </div>
            
        </div>
    )
}

export default Errorpage
