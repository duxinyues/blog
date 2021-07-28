/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-18 10:38:30
 * @LastEditTime: 2021-07-28 23:06:52
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 
 * @FilePath: \blog\src\App.js
 * 
 */
import React from "react"
import Head from "./components/Head";
import SiderCustom from "./components/SiderCustom";
import ArticleList from "./components/list"
function App() {
   return <React.Fragment>
      <Head />
      <article>
         <SiderCustom />
         <ArticleList />

      </article>
   </React.Fragment>
}

export default App;
