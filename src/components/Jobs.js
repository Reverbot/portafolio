import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

// const query = graphql`
//   {
//     allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
//       totalCount
//       nodes {
//         Company
//         date
//         position
//         desc {
//           id
//           name
//         }
//         strapiId
//       }
//     }
//   }
// `

const Jobs = () => {
  const data = useStaticQuery(query)
  const {allStrapiJobs:{nodes:jobs}} = data
  const [value, setValue] = React.useState(0)
  const {Company, position, date, desc} = jobs[value]


  return (
    <section className="section jobs">
    {/* <Title title="expierence" />
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((item, index) => {
          return <button onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`} key={item.strapiId}>{item.Company}</button>
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{Company}</h4>
        <p className="job-date">{date}</p>
        {
          desc.map((item) => {
            return <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          })
        }
      </article>
    </div>
    <Link to="/about" className="btn center-btn">
      More Info
    </Link> */}
  </section>
  )
}

export default Jobs
