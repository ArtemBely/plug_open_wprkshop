import React from 'react';
//@ts-ignore
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';

function MainBlog(){
    return(
      <div>
           <Header />
			  <Blog />
    		  <Footer />
      </div>
    )
}

export default MainBlog;
