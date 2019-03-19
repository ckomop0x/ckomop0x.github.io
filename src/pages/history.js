import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HistoryPage = () => (
  <Layout>
    <SEO title="History" keywords={[`pavel`, `history`, `react`]} />
    <img className="img-responsive"
         src="https://pp.vk.me/c607927/v607927608/104/pPzIBdgfo0Y.jpg"/>
    <div className="text text-history">
      <h2>My history.</h2>
      <p>In 2012 I went back to the Web-Development in city near Moscow.</p>
    </div>
  </Layout>
)

export default HistoryPage
