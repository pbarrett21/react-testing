import React from 'react';
import './styles.css';

function Contacts() {
    return <div className="Contacts">Contacts</div>;
}
  
function Chat() {
    return <div className="Chat">Chat</div>;
}
  
function SplitPane(props) {
    return (
        <div className="WholeThing">
            <div className="SplitPane">
                <div className="SplitPane-left">
                    {props.left}
                </div>
                <div className="SplitPane-right">
                    {props.right}
                </div>
            </div>
        </div>
      
    );
}
  
class SplitPaneApp extends React.Component {
    
    render() {
        return (
            <SplitPane
                left={
                    <Contacts />
                }
                right={
                    <Chat />
                } />
          );
    }
}

export default SplitPaneApp;
