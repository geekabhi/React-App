import React from 'react';
import './counter.css';

export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    inc(){
        console.log('increment');
        // Not possible in react whenever state chage it renders automatically
        // this.state.count += 1; 

        let count = this.state.count + 1;
        this.setState({count});
    }

    dec(){
        console.log('decrement');
        let count = this.state.count - 1;
        this.setState({count});
    }

    render(){
        return (
            <div className="counter"> 
            <h1> Counter </h1>
                <div><h2>{this.state.count}</h2></div>
                <button id='increasing' onClick={this.inc}>++</button>
                <button id='decreasing' onClick={this.dec}>--</button>
            </div>
        );
    }
}