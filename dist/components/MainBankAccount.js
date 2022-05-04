import React from 'react';
//@ts-ignore
import Header from './Header';
import BankAccount from './BankAccount';
function MainBankAccount() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(BankAccount, null)));
}
export default MainBankAccount;
