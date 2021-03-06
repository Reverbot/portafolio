import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from '../components/SEO'

const ProjectsPage = ({data}) => {
  const {allStrapiProjects:{nodes:projects}} = data
  
  return <Layout>
    <SEO title="Projects" description="Projects Page" />
    <section className="projects-page">
      <Projects projects={projects} title="Todos los proyectos" />
    </section>
  </Layout>
}

export const query = graphql`
{
  allStrapiProjects {
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
  }
`

export default ProjectsPage
