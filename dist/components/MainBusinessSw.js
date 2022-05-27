import React from 'react';
//@ts-ignore
import Header from './Header';
import BusinessSw from './BusinessSw';
import Footer from './Footer';
function MainBusinessSw() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(BusinessSw, null),
        React.createElement(Footer, null)));
}
export default MainBusinessSw;
