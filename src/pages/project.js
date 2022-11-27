import React from 'react'

import Layout from '../layout/layout'

export default function project() {
    return (
        <Layout title="Project" description="Project">
            <section id="single-project" style={{ padding: '8px 0' }}>
                <div className="container content-section text-center">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h2>Project Introduction</h2>
                            <p>
                                This is a simple template project, can be very fast to develop a website. Add some commonly used modules to the project to meet daily needs.
                            </p>
                            <p>
                                <a href="https://www.gatsbyjs.cn/showcase/" className="btnghost" rel="noopener"><i className="fa fa-envelope"></i> Request similar project</a>
                                <i className="small"> or </i>
                                <a href="https://www.gatsbyjs.cn/blog/" className="btnghost" rel="noopener"><i className="fa fa-camera"></i> Back to projects gallery</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}
