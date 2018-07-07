import React from 'react';
import ReactDOM from 'react-dom'

class MyComponent extends React.Component {
    render() {
        return(<p>Component name is {this.props.name}</p>);
    }
}
window.renderApp = function(id){
    ReactDOM.render(<MyComponent name="value" />, document.getElementById(id))
};
