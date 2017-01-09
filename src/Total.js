import React from 'react';

export default (props) => {
    let sum = props.nums.reduce((acc,curr) => acc+curr, 0);
    console.log("sum",sum);
    return  (
        <div>
            <h1> Total </h1>
            <ul>
            {
                props.nums.map((num, index) => {
                    return <li key={index}>{num}</li>;
                })
            }
            </ul>
            <p>{props.nums.join('+')} = {sum}</p>
        </div>
    );
};
    