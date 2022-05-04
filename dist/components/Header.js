import React, { Component } from 'react';
//@ts-ignore
import logo from '../../public/images/Union.svg';
class Header extends Component {
    constructor(props) {
        super(props);
        this.sub = React.createRef();
        let user;
        if (typeof window != "undefined") {
            user = window.__INITIAL_DATA__;
        }
        this.state = {
            user
        };
        this.sub = React.createRef();
    }
    componentDidMount() {
        setTimeout(() => {
            console.log(this.state.user);
        }, 1000);
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
                    React.createElement("img", { src: logo, id: 'logo' })),
                React.createElement("div", { id: 'nav' },
                    React.createElement("div", { className: 'menu_item' },
                        React.createElement("a", { href: '#', className: 'header_link link1' }, "Capabilities"),
                        React.createElement("div", { className: "submenu hideMenu", ref: this.sub },
                            React.createElement("a", { href: '#', className: "submenu_item" }, "Business in Switzerland"),
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
