import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
//import { Link } from "gatsby"
import Layout from "../layout/layout"
//import Images from "../components/Images"
//import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

// import Img_1 from "../images/1.avif"
// import Img_2 from "../images/2.avif"
// import Img_3 from "../images/3.avif"
// import Img_4 from "../images/4.avif"
// import Img_5 from "../images/5.avif"
// import Img_6 from "../images/6.avif"
// import Img_7 from "../images/7.avif"
// import Img_8 from "../images/8.avif"


const IndexPage = () => {

  // const imgList = [
  //   "../images/1.avif",
  //   "../images/2.avif",
  //   "../images/3.avif",
  //   "../images/4.avif",
  //   "../images/5.avif",
  //   "../images/6.avif",
  //   "../images/7.avif",
  //   "../images/8.avif",
  // ]

  return (
    <Layout title="Home" description="Home">

      <>
        {/* <!-- About --> */}
        <section id="pageid">
          <div className="container content-section text-center">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="d-block">ABOUT GATSBY</h2>
                <p>
                  Gatsby is a free, open-source framework based on React that helps developers build extremely fast websites and applications.
                </p>
                <p>
                  <a target="_blank" href="https://www.gatsbyjs.cn/docs/" className="btnghost" rel="noreferrer"><i className="fa fa-download"></i>Go To ➜</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Portfolio --> */}
        <section id="portfolio">
          <div className="gallery">
            <ul className="row">
              <li className="col-md-3">
                <StaticImage src="../images/1.avif" alt="1.jpg" width={1000} height={600} />
              </li>
              <li className="col-md-3">
                <StaticImage src="../images/2.avif" alt="2.jpg" width={1000} height={600} />
              </li>
              <li className="col-md-3">
                <StaticImage src="../images/3.avif" alt="3.jpg" width={1000} height={600} />
              </li>
              <li className="col-md-3">
                <StaticImage src="../images/4.avif" alt="4.jpg" width={1000} height={600} />
              </li>
              <li className="col-md-3">
                <StaticImage src="../images/5.avif" alt="5.jpg" width={1000} height={600} />
              </li>
              <li className="col-md-3">
                <StaticImage src="../images/6.avif" alt="6.jpg" width={1000} height={600} />
              </li>
              <li className="col-md-3">
                <StaticImage src="../images/7.avif" alt="7.jpg" width={1000} height={600} />
              </li>
              <li className="col-md-3">
                <StaticImage src="../images/8.avif" alt="8.jpg" width={1000} height={600} />
              </li>
            </ul>
          </div>
        </section>

        {/* <!-- Contact --> */}
        <section id="contact">
          <div className="container content-section text-center">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2>Gatsby's Message</h2>
                <p >
                  🌀 This is a lightning-fast modern site generator。


                  <a href="https://www.gatsbyjs.cn/docs" target="_blank" rel="noreferrer" className="contact_message_href">🔹️Reference</a>

                  <a href="https://www.gatsbyjs.cn/starters" target="_blank" rel="noreferrer" className="contact_message_href">🔹️Templates</a>
                  <a href="https://www.gatsbyjs.cn/docs/awesome-gatsby-resources" target="_blank" rel="noreferrer" className="contact_message_href">🔹️Community</a>
                  <a href="https://www.gatsbyjs.cn/plugins" target="_blank" rel="noreferrer" className="contact_message_href">🔹️Plugin</a>
                </p>
                <p>
                  <i><a href="mailto:757909414@qq.com" rel="noreferrer" className="highlightlink">757909414@qq.com</a></i>
                </p>
                <ul className="list-inline banner-social-buttons">

                  <li className="d-inline">
                    <a href="https://twitter.com/gatsbyjs" rel="noreferrer" className="btn btnghost btn-lg"><span className="network-name">Twitter</span></a>
                  </li>

                  <li className="d-inline">
                    <a href="https://gatsby.dev/discord" rel="noreferrer" className="btn btnghost btn-lg"> <span className="network-name">Discord</span></a>
                  </li>

                  <li className="d-inline">
                    <a href="https://github.com/gatsbyjs/gatsby" rel="noreferrer" className="btn btnghost btn-lg"> <span className="network-name">Github</span></a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  )
}
//export const Head = () => <Seo title="Home" />

export default IndexPage
