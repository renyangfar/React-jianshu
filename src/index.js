import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from "./style.js";
import { GlobalIconFontStyle } from './statics/iconfont/iconfont.js'


ReactDOM.render(<Fragment><GlobalStyle /><GlobalIconFontStyle /><App /></Fragment>, document.getElementById('root'));

