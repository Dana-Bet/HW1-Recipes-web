// import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
    // const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/pages/Home.js"
        },
        {
            name: "Create A Recipe",
            path: "/pages/Recipe.js"
        },
        {
            name: "Share A Recipe",
            path: "/Share"
        },
        {
            name: "Shopping",
            path: "/Shopping"
        },
        {
            name: "Nutritional Info",
            path: "/Nutritional"
        }
    ]
    return (
        <div className="navbar container">
            <a href="#!" className="logo">F<span>oo</span>dies</a>
            <div className="nav-links">
                {
                    links.map(link => (
                        <a href={link.path} key={link.name}>{link.name}</a>
                        // <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    ))
                }
            </div>
        </div>
    )
}