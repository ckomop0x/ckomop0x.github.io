import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = ({image = "gatsby-astronaut.png"}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "https://lh3.googleusercontent.com/-mU9DFRILAI3p7NwLJwwaUCQ3FvUiBhIFUvC4Tm5wxbvRHPIKeSaH2r-FukczKgSy_PUFmshz1Vo6glSZrMeBpwe2DjnoIJt-Gd5mzkfULs-_kdqLoaz9YWescEdPoc-byPFkA9-QJNahB9wNPYFvHSGrUbm7yMm3sULjZrPep9KASMbuJansYNUMlGb4eKQhgPKRx1IgALpWabMsS6Xuj8LPueoaurXHJKVwdGJP23_cC5A1G7WJleNCMfZtEgglEMMA3kRFYDyewz6BnsRlp-3rg4EuwvXkwDErKt1XL3XPoocR3rN3MaR5iV-vHhrNaDATreYFslYqfVeFcd1pdFEZLTNR4bFeFNXkltYzHz4qFAltcmBvCeA3UecGums2Hbr8eyLfgFmdBR97Op-sVx_rdz-nxgBDZXS0qtI8ae4D7p2Og_iQvX6ch2fDeK5zydILZ5Ivf0nVaLim6kc2rIDWQbLNeJz4W4r0G-dbFMzdX16Nk8LwG_6rFYihkMbLj22RDbXGmhT60EDxXfDEwiAkDIvihIcSaIfL4QMKpaPvxMsgfNPD7H0u9Gm8DFx913z4-qRBChwVmafeAFXzyA8qDj7xGgY49pGJ9uau_V6VhYXRzHfQqU0hsTiJZLOZI6U7mIECHIiP-qtAmzZE7SxtUbfcf2eiQ=w1280-h960-no" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Image
