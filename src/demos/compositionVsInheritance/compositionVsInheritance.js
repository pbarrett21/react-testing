import React from 'react';
import './styles.css';

// React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components
// Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.
// We recommend that such components use the special children prop to pass children elements directly into their output

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
}
  
function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
        <h4>Another element!</h4>
      </FancyBorder>
    );
}
  
export default WelcomeDialog;  
