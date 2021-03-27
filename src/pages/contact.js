import React from "react"
import Layout from "../components/Layout"
import SEO from '../components/SEO'
const contact = () => {
  return <Layout>
    <SEO title="Contact" description="Contact Page" />
    <section className="contact-page">
      <article className="contact-form">
        <h3>Ponerse en Contacto</h3>
        <form  method="POST" data-netlify="true"  action="https://formspree.io/f/mleoyqqd">
          <div className="form-group">
            <input name="name" type="text" placeholder="name" className="form-control"/>
            <input name="emal" type="email" placeholder="email" className="form-control"/>
            <textarea name="message" id="" rows="5" placeholder="message" className="form-control"></textarea>
            <button type="submit" className="submit-btn btn">
              Enviar
            </button>
          </div>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
