//Step 1: Importing react
import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

//Step 2: Defining the components
const IndexPage = () => {
  return (
   <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Frieren is the title character and protagonist of the Japanese manga series Frieren: Beyond Journey's End, written by Kanehito Yamada and illustrated by Tsukasa Abe."
        src="../images/frieren.jpe"
      />
   </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage