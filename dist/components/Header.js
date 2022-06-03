import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                                    React.createElement(NavLink, { to: '/business_in_switzerland', className: "submenu_item business_in_sw" }, "Business in Switzerland"),
                                    React.createElement("div", { className: 'submenu_2 hideMenu2' },
                                        React.createElement(NavLink, { to: '/swiss_companies_setup', className: 'submenu_item' }, "Swiss Companies Setup"),
                                        React.createElement(NavLink, { to: '/account_in_sw', className: 'submenu_item' }, "Bank account in Switzerland"),
                                        React.createElement(NavLink, { to: '/aml_control', className: 'submenu_item' }, "AML control"),
                                        React.createElement(NavLink, { to: '/taxes', className: 'submenu_item submenu_tax' }, "Tax and Legal")))),
                            React.createElement(NavLink, { to: '/business_development', className: "submenu_item" }, "Business development"),
                            React.createElement(NavLink, { to: '/emtech_in_davos', className: "submenu_item" }, "EmTech in Davos"),
                            React.createElement(NavLink, { to: '/investment_club_start', className: "submenu_item" }, "Investment Club")))),
                React.createElement(NavLink, { to: '/about', className: 'header_link link2' }, "About"),
                React.createElement("a", { href: '41792695360', className: 'header_link phone' }, "+41 79 269 53 60"),
                React.createElement("div", { className: 'nav_join' },
                    React.createElement("div", { className: 'menu_join' },
                        React.createElement("a", { href: '#', className: 'header_link link3' }, "Join us"),
                        React.createElement("div", { className: 'submenu_join hideMenu3' },
                            React.createElement("input", { type: "text", className: 'input_join', name: "useremail", placeholder: "Email" }),
                            React.createElement("button", { className: "button_join", type: "submit" }, "Apply")))),
                React.createElement("div", { className: 'nav_language' },
                    React.createElement("div", { className: 'menu_language' },
                        React.createElement("a", { href: '#', className: 'header_link language' }, "En"),
                        React.createElement("div", { className: 'submenu_language hideMenu4' },
                            React.createElement("a", { href: "#", className: 'submenu_language_item' }, "Ru"),
                            React.createElement("a", { href: "#", className: 'submenu_language_item' }, "De"),
                            React.createElement("a", { href: "#", className: 'submenu_language_item' }, "Tk"),
                            React.createElement("a", { href: "#", className: 'submenu_language_item' }, "Uz")))))));
    }
}
export default Header;
