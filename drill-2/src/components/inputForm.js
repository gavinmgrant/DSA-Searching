import React, { Component } from 'react';
import Linear from './linear';
import Binary from './binary';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linear: 0,
            binary: 0,
            input: ''
        };
    }

    handleLinear = count => {
        this.setState({
            linear: count
        })
    };

    handleBinary = count => {
        this.setState({
            binary: count
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        let linearSearch = Linear(this.props.dataset, parseInt(this.state.input));
        this.setState({ 
            linear: linearSearch 
        });
        let binarySearch = Binary(this.props.dataset, parseInt(this.state.input));
        this.setState({ 
            binary: binarySearch 
        });
    }

    render() {
        return (
            <div>
                <form className='input-form' onSubmit={this.handleSubmit}>
                    <input
                        required
                        type='number'
                        name='search-input'
                        value={this.state.input}
                        placeholder='enter a number to search'
                        onChange={e => this.setState({ input: e.target.value })}
                    >
                    </input>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
                <section>
                    <h2>Linear search: {this.state.linear}</h2>
                    <h2>Binary search: {this.state.binary}</h2>
                </section>
            </div>
        )
    }
}

export default InputForm;