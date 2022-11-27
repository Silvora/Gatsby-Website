import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "./layout.css"
import "./theme.css"

const Layout = ({ title, description, children }) => {

    const navRef = useRef()
    const collapseNavRef = useRef()
    const moreRef = useRef()

    const [navTheme, SetNavTheme] = useState(false)

    const windowScrollChang = () => {

        let height = window.scrollY
        // let bannerHeight = bannerRef.current.offsetHeight
        // console.log("///", height, bannerRef.current.offsetHeight)
        if (height >= 100) {
            SetNavTheme(true)

        } else {
            SetNavTheme(false)
        }
    }

    const handleCollapse = () => {
        let flg = collapseNavRef.current.style.display
        // console.log(flg)
        if (flg === "none" || !flg) {
            collapseNavRef.current.style.display = "block"
        } else {
            collapseNavRef.current.style.display = "none"
        }

        // console.log("first", collapseNavRef.current)
    }
    const handleMoreList = () => {
        //console.log("first")
        let flg = moreRef.current.style.display
        // console.log(flg)
        if (flg === "none" || !flg) {
            moreRef.current.style.display = "block"
        } else {
            moreRef.current.style.display = "none"
        }
    }

    useEffect(() => {
        windowScrollChang()
        window.addEventListener("scroll", windowScrollChang)
        // window.addEventListener("resize", windowScrollChang)
        return () => {
            window.removeEventListener("scroll", windowScrollChang)
            // window.removeEventListener("resize", windowScrollChang)
        }
    }, [])

    return (
        <>
            <Seo title={title} description={description}></Seo>
            <nav ref={navRef} className={`navbar navbar-expand-md navbar-custom fixed-top ${navTheme ? 'top-nav-collapse navbar-light' : ''}`}>
                <div className="container">
                    <Link className="navbar-brand" to="/">GATSBY</Link>
                    <button className="navbar-light navbar-toggler"
                        onClick={handleCollapse}
                        type="button" data-toggle="collapse" data-target="#navbarsDefault" aria-controls="navbarsDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div ref={collapseNavRef} className="collapse navbar-collapse" id="navbarsDefault" >
                        <ul className="navbar-custom navbar-nav ml-auto">

                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/project">Project</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="dropdown01"
                                    style={{ cursor: "pointer" }}
                                    onClick={handleMoreList}
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</span>
                                <div
                                    ref={moreRef}
                                    className="dropdown-menu" aria-labelledby="dropdown01">
                                    <Link className="dropdown-item" to="/rendering">Mode of rendering</Link>
                                    <Link className="dropdown-item" to="/other">Other Techniques</Link>
                                </div>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/hire">Hire me</Link>
                            </li>

                            <li className="nav-item">
                                <a target="_blank"
                                    rel="noreferrer" className="nav-link eventdl" href="https://github.com/Zjs-7579/Gatsby-Website"><span>📎</span> Download</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <div className="intro">
                <div className="intro-body">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <h1 className="brand-heading">THIS IS GATSBY</h1>
                                <p className="intro-text">
                                    Free Template
                                </p>
                                <a href="#pageid"
                                    rel="noreferrer"
                                    className="btn btn-circle page-scroll">
                                    <span>⇣</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main>{children}</main>

            <footer>
                <div className="container text-center">
                    {/* <p class="credits" >
                        Copyright &copy; Your Website 2022
                        <a target="_blank" href="http://www.mobanwang.com" title="gatsby">gatsby基本使用</a>
                    </p> */}
                    <div style={{ textAlign: 'center' }}>
                        Copyright &copy; Your Website 2022
                    </div>
                </div>
            </footer>
        </>

    )
}


export default Layout