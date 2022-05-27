import React from 'react';
//@ts-ignore
import Header from './Header';
import SwissCompanies from './SwissCompanies';
import Footer from './Footer';
function MainSwCompanies() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(SwissCompanies, null),
        React.createElement(Footer, null)));
}
export default MainSwCompanies;
