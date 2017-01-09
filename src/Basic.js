//This is a stateless component
import React from 'react';

//1.
// function Basic(){
//     return <h1>Hello World!!</h1>;
// }

//2.
// let Basic = () => {
//     return <h1>Hello World!!</h1>;
// }

//1,2
// export default Basic;

//3.
// export default () => {
//     return <h1>Hello World!!</h1>;
// }

//4.
export default () => (
    <div>
        <div>Hello World!!</div>
        <h1>Hello testing multiple content</h1>
    </div>
);
