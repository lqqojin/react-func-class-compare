import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <h2>React World!</h2>
            <FuncComp />
            <ClassComp />
        </div>
    );
}

function FuncComp() {
    return (
        <div className="container">
            <h2>Function Style component</h2>
        </div>
    );
}

class ClassComp extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Class Style Component</h2>
            </div>
        );
    }
}
export default App;
