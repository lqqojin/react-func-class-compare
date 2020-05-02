import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    console.log('App() 호출' )
    return (
        <div className="container">
            <h2>React World!</h2>
            <FuncComp initNumber={100}/>
            <ClassComp initNumber={100}/>
        </div>
    );
}
const funcStyle = 'color:blue';
let funcId = 0;
function FuncComp(props) {
    console.log('FuncComp')
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
    useEffect(function() {
        /**
         * useEffect는
         * componentDidMount && componentDidUpdate 와 같다
         */
        console.log('%cfunc => useEffect number (componentDidMount) > '+(++funcId), funcStyle);
        // 타이틀 바꾸기
        document.title = number;
        return function cleanup() {
            // return 값은 정리 작업 할 때 사용
            console.log('%cfunc => useEffect number return (componentWillUnMount) > '+(++funcId), funcStyle);
        }
        // 인자로 [] 넘기면 최초 1회 실행하는 componentDidMount와 같다
    }, []);
    useEffect(function() {
        /**
         * useEffect는
         * componentDidMount && componentDidUpdate 와 같다
         */
        console.log('%cfunc => useEffect number (componentDidMount && componentDidUpdate) > '+(++funcId), funcStyle);
        // 타이틀 바꾸기
        document.title = number;
        return function cleanup() {
            // return 값은 정리 작업 할 때 사용
            console.log('%cfunc => useEffect number return (componentDidMount && componentDidUpdate) > '+(++funcId), funcStyle);
        }
    }, [number]);
    useEffect(function() {
        /**
         * useEffect는
         * componentDidMount && componentDidUpdate 와 같다
         * 여러개 설치 가능
         */
        console.log('%cfunc => useEffect date (componentDidMount && componentDidUpdate) > '+(++funcId), funcStyle);
        // 타이틀 바꾸기
        document.title = _date;
    }, [_date])
    console.log('%cfunc => render'+(++funcId), funcStyle);
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
const classStyle = 'color:red';
class ClassComp extends React.Component {
    state = {
        number: this.props.initNumber,
        date: (new Date()).toString()
    }
    componentWillMount() {
        /**
         * render 되기 전에 실행 메서드
         */
        console.log('%cclass => componentWillMount', classStyle);
    }
    componentDidMount() {
        /**
         * 화면이 그려진 후에 처리해야 될 일 넣기
         * 추가적인 dom 처리
         * 네트워크에서 다운로드 받아서 후처리 넣기 등등
         */
        console.log('%cclass => componentDidMount', classStyle);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('%cclass => shouldComponentUpdate', classStyle);
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('%cclass => componentWillUpdate', classStyle);
    }
    componentDidUpdate(nextProps, nextState) {
        console.log('%cclass => componentWillUpdate', classStyle);
    }
    render() {
        console.log('%cclass => render', classStyle)
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
