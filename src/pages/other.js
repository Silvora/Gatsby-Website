import React from 'react'

import Layout from '../layout/layout'

import { StaticImage } from "gatsby-plugin-image"

export default function other() {
    return (
        <Layout title="Other" description="Other">
            <section id="pageid">
                <div className="container content-section">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Modern website development system Gatsby.js</h2>
                            <p>Gatsbyjs is a website generation system for modern development websites, with a complete, rich and open source ecosystem. It uses react + GraphQL to produce multi-page applications.</p>
                            <p>Gatsbyjs 是一个现代化开发网站的网站产生系统，拥有完整、丰富且开源的生态圈。它利用 react + GraphQL 产生的多页面应用。</p>

                            <p><StaticImage src="../images/layer.png" alt="gatsby.js" width={1000} height={1000} /></p>

                            <p>From the technical point of view, Gatsbyjs is a system mixed with react, react-router, webpack, babel and GraphQL, which achieves a complete separation of data layer and UI layer and creates a fast website without losing seo. Gatsbyjs provides an interface that allows you to easily access your remote database. Whether it's traditional Wordpress, modern Contentful, whimsical github CMS, or a json profile, it's painless to plug into the system.</p>
                            <p>从技术的角度来说，Gatsbyjs 就是混合了 react, react-router, webpack, babel 还有 GraphQL 的系统，达到数据层和 UI 层彻底分离，打造快速网站，而不失 seo 的现代前端开发模式。Gatsbyjs 提供接口，让你可以轻松获取你的远端数据库。无论是传统的 Wordpress, 现代的 Contentful，突发奇想的 github CMS, 还是一个 json 档案，它都可以无痛地接入到这个系统里面。</p>

                            <p>
                                For example, the blogging system now uses the Contentful CMS, which lets me go to the Contentful site from anywhere and make changes without having to change any code locally. Through the lifecycle hooks provided by the system, you can process, process, splicing, and then generate the data sources you need. You can then use react to write componentized websites, plus your own styles, preprocessors, such as Scss, Stylas-Components.
                            </p>
                            <p>举个例子，博客系统现在是使用 Contentful CMS，让我可以从任意地方访问 Contentful 网站进行修改，无需本地改任何代码。透过系统提供的生命週期钩子，你可以在其中将数据加工，处理，拼接，然后生成你所需要的数据源。 然后，你可以使用 react 编写组件化的网站，加上自己的样式，预处理器，例如 Scss，styled-components。 </p>

                            <div className="disqus"></div>
                            {/* <div class="disqus">
                                <div id="disqus_thread"></div>
                                <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>
                            </div> */}

                        </div>
                        <div className="col-md-4">
                            <div className="sidebar">
                                {/* <div class="widget">
                                    <h6>Sponsor</h6>

                                    <img src="https://i.shareasale.com/image/59353/300x250-usa.gif" border="0" alt="Free website and domain" />


                                </div> */}

                                <div className="widget">
                                    <h6>blog</h6>
                                    <ul className="list-unstyled text-small">
                                        <li><a href="https://zhuanlan.zhihu.com/p/365113639" target="_blank" rel="noreferrer">SSR、SSG、ISR、DPR</a></li>
                                        <li>
                                            <a href="https://zhuanlan.zhihu.com/p/281085404" target="_blank" rel="noreferrer">Jamstack</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="widget">
                                    <h6>technology</h6>
                                    <ul className="list-unstyled text-small">
                                        <li><a href="https://www.nextjs.cn/" target="_blank" rel="noreferrer">Nextjs</a></li>
                                        <li><a href="https://nuxtjs.org/" target="_blank" rel="noreferrer">Nuxtjs</a></li>

                                        <li><a href="https://www.gatsbyjs.cn/" target="_blank" rel="noreferrer">Gatsbyjs</a></li>

                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
