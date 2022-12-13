import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>to Public</Link></li>
                <li><Link to={'/protected'}>to protected</Link></li>
                <li><Link to={'/admin'}>to admin</Link></li>
            </ul>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Layout