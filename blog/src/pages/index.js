
import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    <h2 style={{
      listStyleType: `none`,
      marginLeft: `1.5%`
    }}>Latest</h2>
    <hr style={{
      listStyleType: `none`,
      marginLeft: `1.5%`
    }}></hr>
    <ul style={{
      listStyleType: `none`,
    }}>
      {data.allStrapiPosts.edges.map(document => (
        <li style={{
          float: `left`,
          // display:`inline-block`,
          width: `32%`
        }} key={document.node.id}>
          <p>
            <Img fixed={document.node.previewImage.childImageSharp.fixed} />
            <br></br>
            <Link style={{
              color: `black`,
              textDecoration: `none`,
            }} to={`/${document.node.id}`}>{document.node.title}</Link>
          </p>
          {/* <p>{document.node.content}</p> */}
        </li>
      ))}
    </ul>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <br style={{
      float: `clear`
    }}></br>
    <ul style={{
      listStyleType: `none`,
      float: `left`
    }}>
      {data.allStrapiSeriesses.edges.map(documents => (
        <li style={{
          float: `left`,
          width: `100%`
        }} key={documents.node.posts.id}>

          <h2>{documents.node.title}</h2>
          <hr></hr>
          {documents.node.posts.map(documentss =>
            (
              
              <p style={{
                float: `left`,
                width: `35%`
              }}>
                <Img fixed={documentss.previewImage.childImageSharp.fixed}/>
                <br/>
                <Link style={{
                  color: `black`,
                  textDecoration: `none`,
                }} to={`/Posts_${documentss.id}`}>{documentss.title}</Link>
              </p>
            )
          )}
          <br></br>
        </li>
      ))}
    </ul>
    <br />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiPosts {
      edges {
        node {
          id
          title
          previewText
          content
          image{
            absolutePath
            childImageSharp{
                fixed(width: 400) {
                  base64
                  width
                  height
                  src
                  srcSet
              }
            }
            
          }
          previewImage{
            absolutePath
            childImageSharp{
                fixed(width: 400) {
                  base64
                  width
                  height
                  src
                  srcSet
              }
            }
            
          }
        }
      }
    }

    allStrapiSeriesses(sort: {order: ASC, fields: updated_at}) {
      edges {
        node {
          id
          title
          posts{
            id
            title
            previewText
            previewImage{
              absolutePath
              childImageSharp{
                  fixed(width: 400) {
                    base64
                    width
                    height
                    src
                    srcSet
                }
              }
              
            }
          }
        }
      }
    }
  }


`

