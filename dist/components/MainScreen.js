import React from 'react';
import { NavLink } from 'react-router-dom';
//@ts-ignore
import mainImage from '../../public/images/MainScreen.jpg';
function MainScreen() {
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'wrap_mainScreen', id: 'mainScreen' },
            React.createElement("h1", { className: 'mainScreen_title' }, "Strategic management"),
            React.createElement("h2", { className: 'mainScreen_subtitle' }, "The best strategy for tech companies growth built upon an innovative academic approach to intercultural business collaboration"),
            React.createElement(NavLink, { to: '/business_in_switzerland', className: 'mainScreen_link link4' }, "Business in Switzerland"),
            React.createElement(NavLink, { to: '/business_development', className: 'mainScreen_link link5' }, "Business development"),
            React.createElement(NavLink, { to: '/emtech_in_davos', className: 'mainScreen_link link6' }, "EmTech in Davos"),
            React.createElement(NavLink, { to: '/investment_club_start', className: 'mainScreen_link link7' }, "Investment Club"),
            React.createElement("img", { src: mainImage, id: 'mainImage' }))));
}
export default MainScreen;
