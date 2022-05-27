import React from 'react';
//@ts-ignore
import Header from './Header';
import SwissCompanies from './SwissCompanies';
import Footer from './Footer';

function MainSwCompanies(){
    return(
      <div>
           <Header />
			  <SwissCompanies />
    		  <Footer />
      </div>
    )
}

export default MainSwCompanies;
