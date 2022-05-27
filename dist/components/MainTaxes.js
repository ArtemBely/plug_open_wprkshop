import React from 'react';
//@ts-ignore
import Header from './Header';
import Footer from './Footer';
import TaxLegal from './TaxLegal';
function MainTaxes() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(TaxLegal, null),
        React.createElement(Footer, null)));
}
export default MainTaxes;
