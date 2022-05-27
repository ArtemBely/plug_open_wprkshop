import React from 'react';
function Error() {
    return (React.createElement("div", { className: 'container_error' },
        React.createElement("div", { className: 'wrap_error' },
            React.createElement("p", { className: 'error_title' },
                "This page ",
                React.createElement("br", null),
                " will be available soon"),
            React.createElement("p", { className: 'error_subtitle' }, "Quantum Leap Strategy AG (QL Strategy) is a Swiss Financial and Management Advisory firm. The company assists with new market entrance, positioning and digitalisation of assets. QL Strategy operates globally with its headquarters based in Switzerland."),
            React.createElement("a", { href: "#", className: 'error_button' }, "Back"))));
}
export default Error;
