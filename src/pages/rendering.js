import React from 'react'

import Layout from '../layout/layout'
export default function rendering() {
    return (
        <Layout title="Rendering" description="Rendering">
            <section id="pageid">
                <div className="container content-section">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h2 className="text-center">SSR OR SSG</h2>
                            <p>SSR(Server Side Render) refers to server-side rendering. When the client sends a request to the server, the html content is generated dynamically at runtime and returned to the client.</p>

                            <p>SSR(Server Side Render) 是指服务端渲染，当客户端向服务器发出请求，然后运行时动态生成 html 内容并返回给客户端。
                            </p>

                            <p>SSG(Static Site Generation) is static site generation. Parsing is performed at build time. When a request is made, the html is statically stored and sent directly back to the client.</p>

                            <p>SSG(Static Site Generation) 是静态站点生成，解析是在构建时执行的，当发出请求时，html 将静态存储，直接发送回客户端。

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
