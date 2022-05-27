import React from 'react';
//@ts-ignore
import Header from './Header';
import Footer from './Footer';
import TaxLegal from './TaxLegal';

function MainTaxes(){
    return(
      <div>
           <Header />
			  <TaxLegal />
    		  <Footer />
      </div>
    )
}

export default MainTaxes;
