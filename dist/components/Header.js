import React from 'react';
import logo from '../../public/images/Union.svg';
/*const elements = document.getElementsByClassName('menu_item');
    for (i=0; i<elements.length; i++) {
        elements[i].addEventListener('mouseenter', showSub, false);
        elements[i].addEventListener('mouseleave', hideSub, false);
}
 function showSub() {
     if(this.children.length>1) {
        this.children[1].style.height = 'auto';
        this.children[1].style.opacity = '1';
        this.children[1].style.overflow = 'visible';
     } else {
         return false;
     }
 }
 function hideSub() {
    if(this.children.length>1) {
      this.children[1].style.height = '0';
      this.children[1].style.opacity = '0';
      this.children[1].style.overflow = 'hidden';
    } else {
        return false;
    }
}*/
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
            React.createElement("a", { href: '41792695360', className: 'header_link phone' }, "+41 79 269 53 60"),
            React.createElement("a", { href: '#', className: 'header_link link3' }, "Join us"),
            React.createElement("a", { href: '#', className: 'header_link language' }, "En"))));
}
export default Header;
