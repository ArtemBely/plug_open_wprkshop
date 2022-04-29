import React from 'react';
import logo from '../../public/images/Union.svg';
import trigon from '../../public/images/Polygon 1.svg';
import social1 from '../../public/images/akar-icons_linkedin-fill.svg';
import social2 from '../../public/images/ant-design_facebook-filled.svg';
import social3 from '../../public/images/akar-icons_medium-fill.svg';
import social4 from '../../public/images/akar-icons_twitter-fill.svg';
import social5 from '../../public/images/akar-icons_instagram-fill.svg';
import social6 from '../../public/images/akar-icons_telegram-fill.svg';
import social7 from '../../public/images/akar-icons_whatsapp-fill.svg';
function Header() {
    return (React.createElement("div", { className: 'container' },
        React.createElement("footer", { className: 'wrap_footer' },
            React.createElement("div", { className: 'footer_logo' },
                React.createElement("img", { src: logo, id: 'footer_img' })),
            React.createElement("a", { href: '#', className: 'footer_link link8' }, "Capabilities"),
            React.createElement("a", { href: '#', className: 'footer_link link9' }, "Business in Switzerland"),
            React.createElement("a", { href: '#', className: 'footer_link link10' }, "Business development"),
            React.createElement("a", { href: '#', className: 'footer_link link11' }, "EmTech in Davos"),
            React.createElement("a", { href: '#', className: 'footer_link link12' }, "Investment Club"),
            React.createElement("a", { href: '#', className: 'footer_link link13' }, "About"),
            React.createElement("a", { href: '#', className: 'footer_link link14' }, "Teamb"),
            React.createElement("a", { href: '#', className: 'footer_link link15' }, "Address"),
            React.createElement("a", { href: '#', className: 'footer_link link16' }, "Contact"),
            React.createElement("p", { className: 'footer_link phone2' }, "+41 79 269 53 60"),
            React.createElement("a", { href: '#', className: 'footer_link link18' }, "Join us"),
            React.createElement("a", { href: '#', className: 'footer_link language2' }, "En"),
            React.createElement("img", { src: trigon, id: 'footer_trigon' }),
            React.createElement("div", { className: 'footer_contacts' },
                React.createElement("img", { src: social1, id: 'social1' }),
                React.createElement("img", { src: social2, id: 'social2' }),
                React.createElement("img", { src: social3, id: 'social3' }),
                React.createElement("img", { src: social4, id: 'social4' }),
                React.createElement("img", { src: social5, id: 'social5' }),
                React.createElement("img", { src: social6, id: 'social6' }),
                React.createElement("img", { src: social7, id: 'social7' })))));
}
export default Header;
