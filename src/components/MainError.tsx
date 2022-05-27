import React from 'react';
//@ts-ignore
import Header from './Header';
import Error from './Error';
import Footer from './Footer';

function MainError(){
    return(
      <div>
           <Header />
			  <Error />
    		  <Footer />
      </div>
    )
}

export default MainError;
