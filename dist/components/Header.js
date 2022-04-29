import React from 'react';
import logo from '../../public/images/Union.svg';
function Header() {
    return (React.createElement("div", { className: 'wrap_header' },
        React.createElement("div", { className: 'header' },
            React.createElement("div", { className: 'red_logo' },
                React.createElement("img", { src: logo, id: 'logo' })),
            React.createElement("div", { id: 'nav' },
                React.createElement("div", { className: 'menu_item' },
                    React.createElement("a", { href: '#', className: 'header_link link1' }, "Capabilities"),
                    React.createElement("div", { className: "submenu" },
                        React.createElement("a", { href: '#', className: "submenu_item" }, "Business in Switzerland"),
                        React.createElement("a", { href: '#', className: "submenu_item" }, "Business development"),
                        React.createElement("a", { href: '#', className: "submenu_item" }, "EmTech in Davos"),
                        React.createElement("a", { href: '#', className: "submenu_item" }, "Investment Club")))),
            React.createElement("a", { href: '#', className: 'header_link link2' }, "About"),
            React.createElement("p", { className: 'header_link phone' }, "+41 79 269 53 60"),
            React.createElement("a", { href: '#', className: 'header_link link3' }, "Join us"),
            React.createElement("a", { href: '#', className: 'header_link language' }, "En"))));
}
export default Header;
