import React, { Component } from 'react';
import Student1 from './Student1';


class Appclass extends Component {
    state = {
        name: 'Divyanshu',
        address: 'Lucknow',
        score: '87'
    }
    render() {
        return (
            <div>
                <Student1 name={this.state.name} address={this.state.address} score={this.state.score} />
            </div>
        );
    }
}

export default Appclass;
