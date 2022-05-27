import React from 'react';
//@ts-ignore
import Header from './Header';
import InvestmentClub from './InvestmentClub';
import Footer from './Footer';

function MainInvestment(){
    return(
      <div>
           <Header />
			  <InvestmentClub />
    		  <Footer />
      </div>
    )
}

export default MainInvestment;
