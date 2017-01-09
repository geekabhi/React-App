import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Basic from './Basic';
import Sum from './Sum';
import Total from './Total';
import Timer from './Timer';
import Counter from './Counter';
import Boxes from './Boxes';

import './index.css';

ReactDOM.render(
  <div>
    <div>App: -----------------------</div>
    <App/>
    <Boxes/>
    <div>********************************************************************************************</div>
    <Timer/>
    <Timer/>
    <div>************************************************************************************************</div>
    <Counter />
    <Counter />
    <div>************************************************************************************************</div>
    <div>Basic: -----------------------</div>
    <Basic/>
    <div>Sum: -----------------------</div>
    <Sum a={ 5} b={3}/>
    <div>Sum: -----------------------</div>
    <Sum a={2} b={3}/>
    <div>Total: -----------------------</div>
    <Total nums={[1,2,3]}/>
  </div>,
  document.getElementById('root')
);
