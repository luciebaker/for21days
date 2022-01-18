import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { Container, Button } from 'react-bootstrap'

const Hero = () => {
  const {backgroundImage1} = useStaticQuery(
    graphql`
      query {
        backgroundImage1: file(relativePath: {eq: "bg-hero-withbird.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 2000, 
              quality: 80, 
              webpOptions: {quality: 90}
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(backgroundImage1)

  return (
    <BgImage image={pluginImage} className="hero">
    <Container className="hero-contents">
    <h5>Imagination</h5>
    <h2> Is The Beginning </h2>
    <h5> Of Creation</h5>
    <Button className="button1" >Learn More</Button>
    </Container>
    </BgImage>
  )
}

export default Hero


