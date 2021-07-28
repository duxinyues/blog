import React from "react";
import { Link } from "react-router-dom"

function ArticleList() {
    return <main class="r_box">
        <li>
            <Link to="/detail">
                <i>这是什么</i>
                <h3><a href="/">标题</a></h3>
                <p>内容简版</p>
            </Link>
        </li>
        <li>
            <Link to="/detail">
                <i>这是什么</i>
                <h3><a href="/">标题</a></h3>
                <p>内容简版</p>
            </Link>
        </li>
        <li>
            <Link to="/detail">
                <i>这是什么</i>
                <h3><a href="/">标题</a></h3>
                <p>内容简版</p>
            </Link>
        </li>
        <li>
            <Link to="/detail">
                <i>这是什么</i>
                <h3><a href="/">标题</a></h3>
                <p>内容简版</p>
            </Link>
        </li>
    </main>
}

export default ArticleList