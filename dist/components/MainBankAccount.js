import React from 'react';
//@ts-ignore
import Header from './Header';
import BankAccount from './BankAccount';
import Footer from './Footer';
function MainBankAccount() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(BankAccount, null),
        React.createElement(Footer, null)));
}
export default MainBankAccount;
