import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            submit: ''
        };
    }
    handleChange(e) {
        if (e.target.value.match(/^$/)) {
            this.setState({
                input: '',
                submit: ''
            })
        }
        else if (e.target.value.match(/^-$/)) {
            this.setState({
                input: "-",
                submit: ''
            })
        }
        else if (e.target.value.match(/^-?\d+$/)) {
            this.setState({
                input: parseInt(e.target.value),
                submit: ''
            })
        }
    }
    increment() {
        if (this.state.input !== '') {
            this.setState({
                input: parseInt(this.state.input) + 1,
                submit: ''
            })
        } else {
            this.setState({
                submit: "That's not a number"
            })
        }
    }
    decrement() {
        if (this.state.input !== '') {
            this.setState({
                input: parseInt(this.state.input) - 1,
                submit: ''
            })
        } else {
            this.setState({
                submit: "That's not a number"
            })
        }
    }
    reset() {
        this.setState({
            input: 0,
            submit: ''
        })
    }
    handleSubmit(e) {
        if (this.state.input === '') {
            this.setState({
                submit: "That's not a number"
            })
        } else {
            this.setState({
                submit: this.state.input
            })
        }
        console.log('submit')
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <GetInput
                    input={this.state.input}
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    increment={this.increment.bind(this)}
                    decrement={this.decrement.bind(this)}
                    reset={this.reset.bind(this)}
                />
                <RenderInput input={this.state.submit} />
            </div>
        );
    }
}

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input value={this.props.input} onChange={this.props.handleChange} />
                <br />
                <br />
                <button className='inc' onClick={this.props.increment}>Increment!</button>
                <button className='dec' onClick={this.props.decrement}>Decrement!</button>
                <button className='reset' onClick={this.props.reset}>Reset</button>
                <br />
                <br />
                <button onClick={this.props.handleSubmit} >Submit!</button>
            </div>
        );
    }
}

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
}

// ReactDOM.render(<MyApp />, document.getElementById('root'))

export default App;