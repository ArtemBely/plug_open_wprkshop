import React from 'react';
function Subscribe() {
    return (React.createElement("div", { className: 'container_sub' },
        React.createElement("div", { className: 'wrap_subscribe' },
            React.createElement("h3", { className: 'subscribe_title' },
                "Subscribe ",
                React.createElement("br", null),
                " to stay informed"),
            React.createElement("form", { action: '#' },
                React.createElement("input", { className: 'subcribe_input', type: 'text', name: 'useremail', placeholder: 'Email' }),
                React.createElement("button", { className: 'subcribe_button', type: 'submit' }, "Apply")),
            React.createElement("p", { className: 'subcribe_text' },
                "By filling out this ",
                React.createElement("br", null),
                " form you accept our ",
                React.createElement("a", { href: '#', className: 'subcribe_link' }, "Privacy Policy"))),
        React.createElement("div", { className: 'wrap_subscribe_phone' },
            React.createElement("h3", { className: 'subscribe_title_phone' },
                "Subscribe ",
                React.createElement("br", null),
                " to stay informed"),
            React.createElement("form", { action: '#' },
                React.createElement("input", { className: 'subcribe_input_phone', type: 'text', name: 'useremail', placeholder: 'Email' }),
                React.createElement("button", { className: 'subcribe_button_phone', type: 'submit' }, "Apply")))));
}
export default Subscribe;
