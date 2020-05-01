import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <h2>React World!</h2>
            <FuncComp initNumber={100}/>
            <ClassComp initNumber={100}/>
        </div>
    );
}

function FuncComp(props) {
    return (
        <div className="container">
            <h2>Function Style component</h2>
            <p>Number: {props.initNumber}</p>
        </div>
    );
}

class ClassComp extends React.Component {
    state = {
        number: this.props.initNumber * 2
    }
    render() {
        return (
            <div className="container">
                <h2>Class Style Component</h2>
                {/*<p>Number: {this.props.initNumber}</p>*/}
                <p>Number: {this.state.number}</p>
                <input type="button" value="random" onClick={
                    function() {
                        this.setState({
                            number: Math.floor(Math.random() * 10000)
                        })
                    }.bind(this)
                }/>
            </div>
        );
    }
}
export default App;
