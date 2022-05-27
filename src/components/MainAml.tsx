import React from 'react';
//@ts-ignore
import Header from './Header';
import AMLcontrol from './AMLcontrol';
import Footer from './Footer';

function MainAml(){
    return(
      <div>
           <Header />
			  <AMLcontrol />
    		  <Footer />
      </div>
    )
}

export default MainAml;
