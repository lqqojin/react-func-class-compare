import React, {useState} from 'react';
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
    /**
     * hook 사용
     */
    let numberState = useState(props.initNumber);
    let number = numberState[0];
    let setNumber = numberState[1];

    /*let dateState = useState((new Date()).toString());
    let _date = dateState[0];
    let setDate = dateState[1];*/
    var [_date, setDate] = useState((new Date()).toString());
    console.log('FuncComp')
    return (
        <div className="container">
            <h2>Function Style component</h2>
            <p>Number: {number}</p>
            <p>Date: {_date}</p>
            <p>
                <input type="button" value="random" onClick={
                    function() {
                        setNumber(Math.floor(Math.random() * 10000))
                    }
                }/>
            </p>
            <p>
                <input type="button" value="date" onClick={
                    function() {
                        setDate((new Date()).toString())
                    }
                }/>
            </p>
        </div>
    );
}

class ClassComp extends React.Component {
    state = {
        number: this.props.initNumber,
        date: (new Date()).toString()
    }
    render() {
        console.log('ClassComp')
        return (
            <div className="container">
                <h2>Class Style Component</h2>
                {/*<p>Number: {this.props.initNumber}</p>*/}
                <p>Number: { this.state.number }</p>
                <p>Date: { this.state.date }</p>
                <p>
                    <input type="button" value="random" onClick={
                        function() {
                            this.setState({
                                number: Math.floor(Math.random() * 10000)
                            })
                        }.bind(this)
                    }/>
                </p>
                <p>
                    <input type="button" value="date" onClick={
                        function() {
                            this.setState({
                                date: (new Date()).toString()
                            })
                        }.bind(this)
                    }/>
                </p>
            </div>
        );
    }
}
export default App;
