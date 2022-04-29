import React from 'react';
function Header() {
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'wrap_subscribe' },
            React.createElement("h3", { className: 'subscribe_title' }, "Subscribe to stay informed"),
            React.createElement("form", { action: '#' },
                React.createElement("input", { className: 'subcribe_input', type: 'text', name: 'useremail', placeholder: 'Email' }),
                React.createElement("button", { className: 'subcribe_button', type: 'submit' }, "Apply")),
            React.createElement("p", { className: 'subcribe_text' },
                "By filling out this ",
                React.createElement("br", null),
                " form you accept our Privacy Policy"))));
}
export default Header;
