import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getColors(){

        return {r: parseInt(Math.random()*150) , 
            b: parseInt(Math.random()*150), 
            g: parseInt(Math.random()*100), 
            a: Math.random()}
    }

    render() {     
        return (
            <div className="counter">
                <h1>Boxes</h1>
                {
                    Array(10).fill(null).map((_,i) => {
                        // return <Box r={200} g={20} b={200} a={0.5}/>;
                        return <Box key={i} colors={this.getColors()}/>;
                    })
                }            
            </div>
        );
    }
};