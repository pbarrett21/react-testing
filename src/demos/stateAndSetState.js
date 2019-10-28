import React from 'react';

class StateCar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'white',
            year: '2009',
            model: 'Dodge Journey',
            feature: 'windshield'
        }
    }

    handleChange = event => {
        this.setState({color: event.target.value});
    };

    render() {
        return (
            <div>
                Color:
                <input type="text" value={this.state.color} onChange={this.handleChange}/>
                <p>I drive a {this.state.year} {this.state.model}, its color is <b>{this.state.color}</b> and it has a {this.state.feature}.</p>
            </div>
        );
    }
}

export default StateCar;
