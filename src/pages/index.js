import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`]} />
    <section>
      <div className="container">
        <img className="img-responsive"
             src="https://lh3.googleusercontent.com/-mU9DFRILAI3p7NwLJwwaUCQ3FvUiBhIFUvC4Tm5wxbvRHPIKeSaH2r-FukczKgSy_PUFmshz1Vo6glSZrMeBpwe2DjnoIJt-Gd5mzkfULs-_kdqLoaz9YWescEdPoc-byPFkA9-QJNahB9wNPYFvHSGrUbm7yMm3sULjZrPep9KASMbuJansYNUMlGb4eKQhgPKRx1IgALpWabMsS6Xuj8LPueoaurXHJKVwdGJP23_cC5A1G7WJleNCMfZtEgglEMMA3kRFYDyewz6BnsRlp-3rg4EuwvXkwDErKt1XL3XPoocR3rN3MaR5iV-vHhrNaDATreYFslYqfVeFcd1pdFEZLTNR4bFeFNXkltYzHz4qFAltcmBvCeA3UecGums2Hbr8eyLfgFmdBR97Op-sVx_rdz-nxgBDZXS0qtI8ae4D7p2Og_iQvX6ch2fDeK5zydILZ5Ivf0nVaLim6kc2rIDWQbLNeJz4W4r0G-dbFMzdX16Nk8LwG_6rFYihkMbLj22RDbXGmhT60EDxXfDEwiAkDIvihIcSaIfL4QMKpaPvxMsgfNPD7H0u9Gm8DFx913z4-qRBChwVmafeAFXzyA8qDj7xGgY49pGJ9uau_V6VhYXRzHfQqU0hsTiJZLOZI6U7mIECHIiP-qtAmzZE7SxtUbfcf2eiQ=w1280-h960-no"/>
        <div className="text text-start">
          <h2>My start.</h2>
          <p>I started to code in 2006 in Saint-Petersburg. 1.5 years later I changed my work to an another.</p>
        </div>
        <div className="text text-history hidden">
          <h2>My history.</h2>
          <p>In 2012 I went back to the Web-Development in city near Moscow.</p>
        </div>

        <div className="text text-credits hidden">
          <h2>Credits.</h2>
          <p>Thanx to you all for interesting lessons and the perfect experience.</p>
        </div>
      </div>
      <a href="https://webtime.studio" title="My Webworks Portfolio" target="_blank">My personal WebStudio
        page.
      </a>
    </section>
    {/*<h1>Hi people</h1>*/}
    {/*<p>Welcome to your new Gatsby site.</p>*/}
    {/*<p>Now go build something great.</p>*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
      {/*<Image />*/}
    {/*</div>*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
