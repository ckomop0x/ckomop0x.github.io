import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `portfolio`]} />
    <div className="main"
         style={{backgroundImage: `url('https://res.cloudinary.com/ckomop0x/image/upload/v1578611534/ckomop0x.github.io/DSC_1201_txtdqb.jpg')`}}>
      <div className="main__title">Hello, I am Pavel Klochkov</div>
    </div>
    <section style={{display: 'none'}}>
        <div className="text text-start container">
          <h2>When I started</h2>
          <p>I started to code in 2006 in Saint-Petersburg. It was HTML, CSS and PHP.
            After 1.5 years I changed my occupation and came back to Frontend in 2012.</p>
        </div>
        <a href="https://webtime.studio" title="My Webworks Portfolio" target="_blank">My personal WebStudio
          page.
        </a>
    </section>
  </Layout>
)

export default IndexPage
