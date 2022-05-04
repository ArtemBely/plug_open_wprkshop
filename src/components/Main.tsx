import React from 'react';
//@ts-ignore
import Header from './Header';
import MainScreen from './MainScreen';
import SettleGrow from './SettleGrow';
import Subscribe from './Subscribe';
import Information from './Information';
import Footer from './Footer';
import BankAccount from './BankAccount';

function Main(){
    return(
      <div>
        <Header />
  		  <MainScreen />
  		  <SettleGrow />
  		  <Subscribe />
  		  <Information />
  		  <Footer />
		  <BankAccount />
      </div>
    )
}

export default Main;
