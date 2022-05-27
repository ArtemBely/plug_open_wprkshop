import React from 'react';
//@ts-ignore
import Header from './Header';
import AMLcontrol from './AMLcontrol';
import Footer from './Footer';
function MainAml() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(AMLcontrol, null),
        React.createElement(Footer, null)));
}
export default MainAml;
