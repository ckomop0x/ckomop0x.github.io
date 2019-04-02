import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const HistoryPage = () => (
  <Layout>
    <SEO title="History" keywords={[`pavel`, `history`, `react`]} />
    <img className="img-responsive"
         src="https://pp.userapi.com/c638531/v638531608/3f6b9/sh5iX3_aHPY.jpg"
         alt="Credits"/>
    <div className="text text-history">
      <h2>Credits.</h2>
      <p>Thanx to you all for interesting lessons and the perfect experience.</p>
    </div>
  </Layout>
)

export default HistoryPage


