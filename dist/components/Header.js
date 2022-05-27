import React, { Component } from 'react';
//@ts-ignore
import logo from '../../public/images/Union.svg';
class Header extends Component {
    constructor(props) {
        super(props);
        this.sub = React.createRef();
        this.sub = React.createRef();
    }
    /*  --> обозначения функций с привязкой ref (id) элементов
    showSub = (): void => {
            this.sub?.current?.classList.add("hideMenu");
    }
    hideSub = (): void => {
        this.sub?.current?.classList.remove("hideMenu");
    }
    */
    render() {
        return (React.createElement("div", { className: 'wrap_header' },
            React.createElement("div", { className: 'header' },
                React.createElement("div", { className: 'red_logo' },
                    React.createElement("a", { href: '#mainScreen' },
                        React.createElement("img", { src: logo, id: 'logo' }))),
                React.createElement("div", { id: 'nav' },
                    React.createElement("div", { className: 'menu_item' },
                        React.createElement("a", { href: '#', className: 'header_link link1' }, "Capabilities"),
                        React.createElement("div", { className: "submenu hideMenu", ref: this.sub },
                            React.createElement("div", { id: 'nav_2' },
                                React.createElement("div", { className: 'menu_item2' },
                                    React.createElement("a", { href: '#', className: "submenu_item business_in_sw" }, "Business in Switzerland"),
                                    React.createElement("div", { className: 'submenu_2 hideMenu2' },
                                        React.createElement("a", { href: "#", className: 'submenu_item' }, "Swiss Companies Setup"),
                                        React.createElement("a", { href: "#", className: 'submenu_item' }, "Bank account in Switzerland"),
                                        React.createElement("a", { href: "#", className: 'submenu_item' }, "AML control"),
                                        React.createElement("a", { href: "#", className: 'submenu_item submenu_tax' }, "Tax and Legal")))),
                            React.createElement("a", { href: '#', className: "submenu_item" }, "Business development"),
                            React.createElement("a", { href: '#', className: "submenu_item" }, "EmTech in Davos"),
                            React.createElement("a", { href: '#', className: "submenu_item" }, "Investment Club")))),
                React.createElement("a", { href: '#', className: 'header_link link2' }, "About"),
                React.createElement("a", { href: '41792695360', className: 'header_link phone' }, "+41 79 269 53 60"),
                React.createElement("a", { href: '#', className: 'header_link link3' }, "Join us"),
                React.createElement("a", { href: '#', className: 'header_link language' }, "En"))));
    }
}
export default Header;
