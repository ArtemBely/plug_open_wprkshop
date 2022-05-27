import React from 'react';
//@ts-ignore
import Header from './Header';
import BusinessDevelopment from './BusinessDevelopment';
import Footer from './Footer';
function MainDevelopment() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(BusinessDevelopment, null),
        React.createElement(Footer, null)));
}
export default MainDevelopment;
