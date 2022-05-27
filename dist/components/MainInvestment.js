import React from 'react';
//@ts-ignore
import Header from './Header';
import InvestmentClub from './InvestmentClub';
import Footer from './Footer';
function MainInvestment() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(InvestmentClub, null),
        React.createElement(Footer, null)));
}
export default MainInvestment;
