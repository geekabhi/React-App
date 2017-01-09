import React from 'react';

export default (props) => {
    let sum = props.a + props.b;
    return  (
        <div>
            <h1> Sum </h1>
            <p>Sum of {props.a} and {props.b} = {sum}</p>
        </div>
    );
};
    