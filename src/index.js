/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-18 10:38:30
 * @LastEditTime: 2021-07-28 23:41:41
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 
 * @FilePath: \blog\src\index.js
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import "./style/index.css";
import "./style/base.css";
import "./style/info.css";
import "./style/m.css";
import Page from './page';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
