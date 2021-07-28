import React from "react"
function ArticleDetail() {
    return <React.Fragment>
        <main className="infosbox">
            <div class="newsview">
                <h3 class="news_title">个人博客，属于我的小世界！</h3>
                <div class="bloginfo">
                    <ul>
                        <li class="author">作者：<a href="/">读心悦</a></li>
                        <li class="lmname"><a href="/">学无止境</a></li>
                        <li class="timer">时间：2021-5-13</li>
                        <li class="view">908</li>
                    </ul>
                </div>
                <div class="tags"><a href="/" target="_blank">个人博客</a> &nbsp; <a href="/" target="_blank">小世界</a></div>
                <div class="news_about"><strong>简介</strong>个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。</div>
                <div class="news_con"> 本文很长，记录了我博客建站初到现在的过程，还有我从毕业到现在的一个状态，感谢您的阅读，如果你还是学生，也许你能从此文中，找到我们曾经相似的地方。如果你已经工作，有自己的博客，我想，你并没有忘记当初建立个人博客的初衷吧！<br />

                </div>
            </div>
            <div class="share">
                <p class="diggit"><a href="/" target="_blank"> 很赞哦！ </a>(<b id="diggnum"><script type="text/javascript" src="/e/public/ViewClick/?classid=2&amp;id=20&amp;down=5"></script>13</b>)</p>
            </div>
            <div class="nextinfo">
                <p>上一篇：<a href="/news/life/2018-03-13/804.html">作为一个前端,如果遭到质疑你是否能恪守自己的原则?</a></p>
                <p>下一篇：<a href="/news/life/">返回列表</a></p>
            </div>
            <div class="news_pl">
                <h2>文章评论</h2>
                <ul>
                    <div class="gbko"> </div>
                </ul>
            </div>
        </main>
    </React.Fragment >
}

export default ArticleDetail