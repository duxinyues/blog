/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-18 10:38:30
 * @LastEditTime: 2021-07-28 23:46:05
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 
 * @FilePath: \blog\src\App.js
 * 
 */
import React from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import Head from "./components/Head";
import SiderCustom from "./components/SiderCustom";
import ArticleList from "./components/list"
import ArticleDetail from "./components/articleDetail"
function App() {
   return <React.Fragment>
      <Head />
      <article>
         <SiderCustom />
         <Switch>
            <Route path="/list" component={ArticleList} />
            <Route path="/detail" component={ArticleDetail} />
            {/* <Route render={() => <Redirect to="/404" />} /> */}
         </Switch>
      </article>
   </React.Fragment>
}

export default withRouter(App);
