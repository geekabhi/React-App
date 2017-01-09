import React from 'react';
import './timer.css';

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {counter: 0};
        this.timer = null;
        this.go = this.go.bind(this);
    }

    go() {
        clearInterval(this.timer);
        const start = +this.num.value;
        this.num.value = "";
        this.setState({counter:start});
        this.timer = setInterval( () => {
            let counter = this.state.counter - 1;
            if(counter <= 0){
                clearInterval(this.timer);
            }
            this.setState({counter:counter});
        }, 1000);
    }

    render(){
        return (
            <div className="timer">
                <h1> Timer </h1>
                <div >
                    <input ref={ text => this.num = text} type="text"></input>
                    <button onClick={this.go}>Go</button> 
                </div>
                <div className="count">{this.state.counter}</div>

            </div>
        );
    }
}