import React from 'react';
import ReactDOM from 'react-dom';
import Example1 from './ChecklistExample';

var div = document.createElement('div');
div.id = 'root';

document.body.appendChild(div)
ReactDOM.render(<Example1 />, div);


