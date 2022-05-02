import React from 'react';
import growImage from '../../public/images/Group 131.png';
import mountains from '../../public/images/mountains.png';
function Header() {
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'wrap_settleGrow' },
            React.createElement("div", { className: 'mountains' },
                React.createElement("img", { src: mountains, id: 'mountains_img' })),
            React.createElement("h3", { className: 'settleGrow_title2' }, "Settle, grow and expand"),
            React.createElement("div", { className: 'settleGrow_img' },
                React.createElement("img", { src: growImage, id: 'grow_img' }),
                React.createElement("a", { href: '#', className: 'grow_download' }, "Download One Pager")),
            React.createElement("div", { className: 'settleGrow_block' },
                React.createElement("h3", { className: 'settleGrow_title' }, "Settle, grow and expand"),
                React.createElement("p", { className: 'settleGrow_item grow_item1' }, "Vision"),
                React.createElement("p", { className: 'settleGrow_text grow_text1' }, "Bring most needed emerging technologies (EmTech) to the daily life of   businesses and people with understanding of its value and benefits."),
                React.createElement("p", { className: 'settleGrow_item grow_item2' }, "Mission"),
                React.createElement("p", { className: 'settleGrow_text grow_text2' }, "It's very difficult to understand a new culture and, of course, it's even more difficult to understand a new technology. We bring science of imagology to bridge this gap and establish a better understanding of the most innovative ideas."),
                React.createElement("p", { className: 'settleGrow_item grow_item3' }, "Goals"),
                React.createElement("p", { className: 'settleGrow_text grow_text3' }, "Being in the heart of Europe, we would like to use Swiss support of innovation and entrepreneurship for the world's good.  But opening and developing businesses in Switzerland can be just the first step. Bringing EmTech further to other countries, we would build positioning upon advanced social science and local partnerships. We believe that education and collaboration lead to tech adoption. That is why we host annual EmTech conferences in Davos and founded the Investment Club. ")))));
}
export default Header;
