/*
 * @Author: yongyuan at <yongyuan253015@gmail.com>
 * @Date: 2021-07-18 10:38:30
 * @LastEditTime: 2021-07-18 11:31:43
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @Description: 
 * @FilePath: \blog\src\App.js
 * 
 */

import { Layout } from "antd";
import Head from "./components/Head";
import SiderCustom from "./components/SiderCustom"
const {  Content } = Layout;
function App() {
   return <Layout>
      <Head />
      <article>
         <SiderCustom />
         <Content>内容</Content>
      </article>
   </Layout>
}

export default App;
