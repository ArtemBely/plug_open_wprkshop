import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import logo from '../../public/images/Union.svg';
//@ts-ignore
import social1 from '../../public/images/akar-icons_linkedin-fill.svg';
//@ts-ignore
import social2 from '../../public/images/ant-design_facebook-filled.svg';
//@ts-ignore
import social3 from '../../public/images/akar-icons_medium-fill.svg';
//@ts-ignore
import social4 from '../../public/images/akar-icons_twitter-fill.svg';
//@ts-ignore
import social5 from '../../public/images/akar-icons_instagram-fill.svg';
//@ts-ignore
import social6 from '../../public/images/akar-icons_telegram-fill.svg';
//@ts-ignore
import social7 from '../../public/images/akar-icons_whatsapp-fill.svg';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.capabilities = React.createRef();
        this.capabilities = React.createRef();
    }
    render() {
        return (React.createElement("div", { className: 'container_footer' },
            React.createElement("footer", { className: 'wrap_footer' },
                React.createElement("div", { className: 'footer_logo' },
                    React.createElement("a", { href: '#mainScreen' },
                        React.createElement("img", { src: logo, id: 'footer_img' }))),
                React.createElement("a", { href: '#', className: 'footer_link link8', ref: this.capabilities }, "Capabilities"),
                React.createElement(NavLink, { to: '/business_in_switzerland', className: 'footer_link link9' }, "Business in Switzerland"),
                React.createElement(NavLink, { to: '/business_development', className: 'footer_link link10' }, "Business development"),
                React.createElement(NavLink, { to: '/emtech_in_davos', className: 'footer_link link11' }, "EmTech in Davos"),
                React.createElement(NavLink, { to: '/investment_club_start', className: 'footer_link link12' }, "Investment Club"),
                React.createElement("a", { href: '#', className: 'footer_link link13' }, "About"),
                React.createElement(NavLink, { to: '/about', className: 'footer_link link14' }, "Team"),
                React.createElement(NavLink, { to: '/about', className: 'footer_link link15' }, "Address"),
                React.createElement(NavLink, { to: '/about', className: 'footer_link link16' }, "Contact"),
                React.createElement("a", { href: '41792695360', className: 'footer_link phone2' }, "+41 79 269 53 60"),
                React.createElement("div", { className: 'nav_join2' },
                    React.createElement("div", { className: 'menu_join2' },
                        React.createElement("a", { href: '#', className: 'footer_link link18' }, "Join us"),
                        React.createElement("div", { className: 'submenu_join2 hideMenu4' },
                            React.createElement("input", { type: "text", className: 'input_join2', name: "useremail", placeholder: "Email" }),
                            React.createElement("button", { className: "button_join2", type: "submit" }, "Apply")))),
                React.createElement("div", { className: 'nav_language2' },
                    React.createElement("div", { className: 'menu_language2' },
                        React.createElement("a", { href: '#', className: 'footer_link language2' }, "En"),
                        React.createElement("div", { className: 'submenu_language2 hideMenu4' },
                            React.createElement("a", { href: "#", className: 'submenu_language_item2' }, "Ru"),
                            React.createElement("a", { href: "#", className: 'submenu_language_item2' }, "De"),
                            React.createElement("a", { href: "#", className: 'submenu_language_item2' }, "Tk"),
                            React.createElement("a", { href: "#", className: 'submenu_language_item2' }, "Uz")))),
                React.createElement("a", { href: '#', className: 'trigon_footer' },
                    React.createElement("div", { id: 'footer_trigon' })),
                React.createElement("div", { className: 'footer_contacts' },
                    React.createElement("a", { href: '#' },
                        React.createElement("img", { src: social1, className: 'social_link', id: 'social1' })),
                    React.createElement("a", { href: '#' },
                        React.createElement("img", { src: social2, className: 'social_link', id: 'social2' })),
                    React.createElement("a", { href: '#' },
                        React.createElement("img", { src: social3, className: 'social_link', id: 'social3' })),
                    React.createElement("a", { href: '#' },
                        React.createElement("img", { src: social4, className: 'social_link', id: 'social4' })),
                    React.createElement("a", { href: '#' },
                        React.createElement("img", { src: social5, className: 'social_link', id: 'social5' })),
                    React.createElement("a", { href: '#' },
                        React.createElement("img", { src: social6, className: 'social_link', id: 'social6' })),
                    React.createElement("a", { href: '#' },
                        React.createElement("img", { src: social7, className: 'social_link', id: 'social7' }))))));
    }
}
export default Footer;
