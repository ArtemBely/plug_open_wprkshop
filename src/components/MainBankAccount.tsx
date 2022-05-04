import React from 'react';
//@ts-ignore
import Header from './Header';
import BankAccount from './BankAccount';
import Footer from './Footer';

function MainBankAccount(){
    return(
      <div>
          <Header />
          <BankAccount />
			 <Footer />
      </div>
    )
}

export default MainBankAccount;
