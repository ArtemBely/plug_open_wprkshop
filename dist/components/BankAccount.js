import React from 'react';
//@ts-ignore
import background from '../../public/images/image 2.png';
//@ts-ignore
import logo from '../../public/images/UnionBank.svg';
//@ts-ignore
import timeline from '../../public/images/timeline.png';
function BankAccount() {
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'wrap_bankAccount' },
            React.createElement("div", { className: 'bankAccount_header' },
                React.createElement("img", { src: background, id: 'background_bank' }),
                React.createElement("img", { src: logo, id: 'logo_bank' })),
            React.createElement("h2", { className: 'bankAccount_title' }, "Bank account in Switzerland"),
            React.createElement("p", { className: 'bankAccount_subtitle' }, "Opening a corporate bank account in Switzerland is necessary to set up a company here. As a matter of fact, the Swiss bank account opening process must be completed prior to the incorporation of the company with the Trade Register. A bank statement indicating the deposit of the share capital is needed to be filed alongside the company`s statutory documents. The most important part of the process is to choose the bank who will support your business strategy and the region you are targeting."),
            React.createElement("h4", { className: 'bankAccount_item' }, "How to open a bank account"),
            React.createElement("div", { className: 'timeline_block' },
                React.createElement("img", { src: timeline, id: 'timeline_img' })),
            React.createElement("div", { className: 'bankAccount_block1' },
                React.createElement("h4", { className: 'bankAccount_item' }, "Advantages of opening a bank account in Switzerland"),
                React.createElement("p", { className: 'advantages_block1 advantages1' }, "The main benefits of Swiss bank accounts are the low level of the financial risk and the high level of privacy"),
                React.createElement("p", { className: 'advantages_block1 advantages2' }, "Swiss law prevents the bank from disclosing any information regarding an account (even its existence) without the depositor's permission, except in cases where severe criminal activity is suspected"),
                React.createElement("p", { className: 'advantages_block1 advantages3' }, "The fact that Switzerland has stayed politically stable and historically neutral makes it an ideal place for private banks, family offices, funds and other financial structures. "),
                React.createElement("p", { className: 'advantages_block1 advantages4' }, "The Swiss Banking System is the most secure in the world. In case of the implausible event of a collapse of the banking system the holders` funds are backed in full by the Swiss Bankers Association depositors agreement."),
                React.createElement("a", { href: '#', className: 'block1_button' }, "Request a Free Consultation")),
            React.createElement("div", { className: 'bankAccount_block2' },
                React.createElement("h4", { className: 'bankAccount_item' }, "How to open a corporate bank account in Switzerland"),
                React.createElement("p", { className: 'bankAccount_text' }, "There is a certain list of documents to be filed to the Swiss bank in order to open a corporate bank account in Switzerland:"),
                React.createElement("p", { className: 'bankAccount_text block2_text1' }, "Details of all shareholders of the company in the form of copies of valid passports or IDs and permanent addresses."),
                React.createElement("p", { className: 'bankAccount_text block2_text2' }, "Business incorporation information and contact person."),
                React.createElement("p", { className: 'bankAccount_text block2_text3' }, "Information about the company."),
                React.createElement("p", { className: 'bankAccount_text block2_text4' }, "Information about the type of account, services and intentions of using it."),
                React.createElement("p", { className: 'bankAccount_text block2_text5' }, " Information about the potential cash withdrawals.")))));
}
export default BankAccount;
