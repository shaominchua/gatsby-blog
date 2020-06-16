import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <Img fixed={data.strapiPosts.image.childImageSharp.fixed}/>

    <p style={{
                marginLeft: `5%`
              }}>
      <p>Length: {data.strapiPosts.readLength}</p>
      <h4>Language: {data.strapiPosts.language}</h4>
      <h1>{data.strapiPosts.title}</h1>
      {/* <p>
        by{" "}
        <Link to={`/authors/User_${data.allStrapiPosts.author}`}>
          {data.strapiArticle.author.username}
        </Link>
      </p> */}
      <ReactMarkdown source={data.strapiPosts.content}  transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`} />

      
    </p>
   
  </Layout>
)
export default ArticleTemplate
export const query = graphql`
 query ArticleTemplate($id: String!) {
    strapiPosts(id: { eq: $id }) {
      title
      image{
        absolutePath
        childImageSharp{
            fixed(width: 1900) {
              base64
              width
              height
              src
              srcSet
          }
        }
      }
    	readLength
    	language
      content
  }
}
`