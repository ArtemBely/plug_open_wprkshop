import React from 'react';
//@ts-ignore
import Header from './Header';
import MainScreen from './MainScreen';
import SettleGrow from './SettleGrow';
import Subscribe from './Subscribe';
import Information from './Information';
import Footer from './Footer';
import BankAccount from './BankAccount';
function Main() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(MainScreen, null),
        React.createElement(SettleGrow, null),
        React.createElement(Subscribe, null),
        React.createElement(Information, null),
        React.createElement(Footer, null),
        React.createElement(BankAccount, null)));
}
export default Main;
