import React from 'react';
import block1 from '../../public/images/shutterstock_1606410442 1.png';
import block2 from '../../public/images/IMG_5588 3 1.png';
import block3 from '../../public/images/Mask Group.png';
import block4 from '../../public/images/Group 109.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Header() {
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'wrap_information' },
            React.createElement("div", { className: 'information_block1' },
                React.createElement(LazyLoadImage, { src: block1, id: 'block1_img' }),
                React.createElement("h4", { className: 'block1_title information_title' },
                    "Business ",
                    React.createElement("br", null),
                    " in Switzerland "),
                React.createElement("p", { className: 'block1_text information_text' }, "Make Switzerland a new home for your business. If you have an idea, we can help you with strategic and administrative implementation: Company Setup, Legal and Accounting support, Strategy of growth in Swiss market, Marketing strategy and Positioning, Partnerships and Investments."),
                React.createElement("p", { className: 'block1_more information_more' }, "More")),
            React.createElement("div", { className: 'information_block2' },
                React.createElement(LazyLoadImage, { src: block2, id: 'block2_img' }),
                React.createElement("h4", { className: 'block2_title information_title' }, "Business development"),
                React.createElement("p", { className: 'block2_text information_text' }, "First understand the culture, then bring your product to people. We use an academic approach to business collaboration which is built upon cross-cultural and social science. In a combination with our experience in the EmTech presentations and sales, it gives us a unique set of skills. We build positioning in a way that be it business or customer segments, your idea will be understood and your product will be loved."),
                React.createElement("p", { className: 'block2_more information_more' }, "More")),
            React.createElement("div", { className: 'information_block3' },
                React.createElement(LazyLoadImage, { src: block3, id: 'block3_img' }),
                React.createElement("h4", { className: 'block3_title information_title' }, "EmTech IM in Davos"),
                React.createElement("p", { className: 'block3_text information_text' },
                    "Sharpest investment ideas on the top of Swiss mountains. Having an extensive background in investment banking and business development, our team created an annual business gathering the EmTech Investment Meeting (2019, 2020) focused on bringing together the most prominent figures of fintech, AI, government officials and HNI to share insights, envision the future and find a key partnership for an upcoming year. ",
                    React.createElement("br", null),
                    " 2022. The International EmTech Investment Association Forum will take place in Davos from 16 to 22 of January 2022. The community-driven event will be as usual co-hosted by Quantum Leap Strategy AG."),
                React.createElement("p", { className: 'block3_more information_more' }, "More")),
            React.createElement("div", { className: 'information_block4' },
                React.createElement(LazyLoadImage, { src: block4, id: 'block4_img' }),
                React.createElement("h4", { className: 'block4_title information_title' }, "Investment Club"),
                React.createElement("p", { className: 'block4_text information_text' }, "QL Strategy is an authorized Swiss financial intermediary as per Swiss Law and conducts all necessary steps to protect investors, verify the source of funds and fight against Money laundering. More information about the investment Club will be presented in Davos at the International EmTech Investment Meeting Forum, which takes place from 16 to 22 of January 2022. Please let us know if you would like to be within the club members and we will contact you."),
                React.createElement("p", { className: 'block4_more information_more' }, "More")))));
}
export default Header;
