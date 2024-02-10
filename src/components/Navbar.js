import React from 'react';

export default function NavBar({ currentPage, onPageChange }) {
    const links = [
        {
            name: "Home",
            path: "/Home"
        },
        {
            name: "Recipes",
            path: "/Recipe"
        },
        {
            name: "Plan Meal",
            path: "/Plan"
        },
        {
            name: "Share",
            path: "/Share"
        },
        {
            name: "Shopping",
            path: "/Shopping"
        }
    ];

    const handleLinkClick = (event, pageName) => {
        event.preventDefault(); // Prevent default behavior of hyperlink
        onPageChange(pageName); // Update the current page
    };

    return (
        <div className="navbar container">
            <a href="#!" className="logo">Yu<span>mm</span>y</a>
            <div className="nav-links">
                {links.map(link => (
                    <a
                        href={link.path}
                        key={link.name}
                        className={currentPage === link.name ? "active" : ""}
                        onClick={(event) => handleLinkClick(event, link.name)}
                        >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
