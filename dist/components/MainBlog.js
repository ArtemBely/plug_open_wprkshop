import React from 'react';
//@ts-ignore
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
function MainBlog() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(Blog, null),
        React.createElement(Footer, null)));
}
export default MainBlog;
