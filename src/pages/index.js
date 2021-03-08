import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
// import Services from "../components/Services"
// import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from '../components/SEO'
export default ({data}) => {
  const {allStrapiProjects:{nodes:projects}, allStrapiBlogs:{nodes:blogs}} = data
  return (
    <Layout>
      <SEO title="Home" description="Home Page"/>
      <Hero />
      <Projects projects={projects} title="Proyectos" showLink/>
      <Blogs blogs={blogs} title="Ultimos Articulos" showLink/>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(limit: 3, sort: {fields: date, order: DESC}) {
      nodes {
        category
        content
        date(formatString: "D MMMM, YYYY", locale: "es")
        desc
        id
        slug
        title
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
