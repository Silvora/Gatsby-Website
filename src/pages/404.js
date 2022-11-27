import * as React from "react"

//import Layout from "../layout/layout"
import Seo from "../components/seo"
import errImg from "../images/404.jpeg"
const NotFoundPage = () => (
  <div>
    <Seo title="404: Not Found"
      description="404: Not Found"
      keywords="404: Not Found" />
    <>
      <img src={errImg} alt="404: Not Found" style={{ display: 'block', width: '100vw', height: '100vh' }}></img>
    </>
  </div>
)


export default NotFoundPage
