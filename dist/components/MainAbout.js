import React from 'react';
//@ts-ignore
import Header from './Header';
import About from './About';
import Footer from './Footer';
function MainAbout() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(About, null),
        React.createElement(Footer, null)));
}
export default MainAbout;
