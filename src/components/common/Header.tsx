import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const Header = () => {
    return (
        <nav className="navbar navbar-expanden-lg bg-body-tertiary navbar-dark bg-dark">
            <Link className="navbar-brand" to={'/'}> UseContext </Link>
                <div className="container-fluid">
                    <Outlet/>
                </div>
        </nav>
    )
}

export default Header