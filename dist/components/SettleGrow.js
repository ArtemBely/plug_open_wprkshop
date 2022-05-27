import React from 'react';
//@ts-ignore
import growImage from '../../public/images/Group 131.png';
//@ts-ignore
import growImage2 from '../../public/images/one pager quantum leap strategy 1.png';
//@ts-ignore
import mountains from '../../public/images/mountains.png';
function SettleGrow() {
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'wrap_settleGrow' },
            React.createElement("div", { className: 'mountains' },
                React.createElement("img", { src: mountains, id: 'mountains_img' })),
            React.createElement("h3", { className: 'settleGrow_title2' }, "Settle, grow and expand"),
            React.createElement("div", { className: 'settleGrow_img' },
                React.createElement("img", { src: growImage, id: 'grow_img' }),
                React.createElement("a", { href: '#', className: 'grow_download' }, "Download One Pager")),
            React.createElement("div", { className: 'settleGrow_phone' },
                React.createElement("div", { className: 'settleGrow_img2' },
                    React.createElement("img", { src: growImage2, id: 'grow_img2' })),
                React.createElement("p", { className: 'settleGrow_phone_text' }, "This document is dipiscing elit elementum nibh lacus amet magna commodo et facilisis. Tellus tellus arcu, nulla integer id.")),
            React.createElement("div", { className: 'settleGrow_block' },
                React.createElement("h3", { className: 'settleGrow_title' }, "Settle, grow and expand"),
                React.createElement("p", { className: 'settleGrow_item grow_item1' }, "Vision"),
                React.createElement("p", { className: 'settleGrow_text grow_text1' }, "Bring most needed emerging technologies (EmTech) to the daily life of   businesses and people with understanding of its value and benefits."),
                React.createElement("p", { className: 'settleGrow_item grow_item2' }, "Mission"),
                React.createElement("p", { className: 'settleGrow_text grow_text2' }, "It's very difficult to understand a new culture and, of course, it's even more difficult to understand a new technology. We bring science of imagology to bridge this gap and establish a better understanding of the most innovative ideas."),
                React.createElement("p", { className: 'settleGrow_item grow_item3' }, "Goals"),
                React.createElement("p", { className: 'settleGrow_text grow_text3' }, "Being in the heart of Europe, we would like to use Swiss support of innovation and entrepreneurship for the world's good.  But opening and developing businesses in Switzerland can be just the first step. Bringing EmTech further to other countries, we would build positioning upon advanced social science and local partnerships. We believe that education and collaboration lead to tech adoption. That is why we host annual EmTech conferences in Davos and founded the Investment Club. ")))));
}
export default SettleGrow;
