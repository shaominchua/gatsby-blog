import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import "../static/global.css"
import "../static/bootstrap.css"
import ReactHtmlParser from "react-html-parser"
import { Helmet } from "react-helmet"
import Image from 'gatsby-image';

// import { withPrefix, Link } from "gatsby"
// // import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
const ArticleTemplate = ({ data }) => (
  <Layout style={{
    overflow: `hidden`
  }}>
    {/* <div>
      {typeof window !== 'undefined' && ReactMediaPlayer && <ReactMediaPlayer />}
    </div> */}

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12" ><Img fluid={data.strapiPosts.image.childImageSharp.fluid} /></div>
      </div>
    </div>

    <div class="container-fluid" style={{
      marginLeft: `5%`
    }}>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-12" style={{ fontStyle: `italic`, fontFamily: `Source Sans Pro`, fontSize: '20px' }} >Length: {data.strapiPosts.readLength}</div>
        {/* <div class="col-xs-12 col-sm-12 col-lg-12">  <h4>Language: {data.strapiPosts.language}</h4></div> */}
        <div class="col-xs-12 col-sm-12 col-lg-12"> <h1>{data.strapiPosts.title}</h1></div>

      </div>

      <div style={{
        overflow: `hidden`
      }}>
        {ReactHtmlParser(data.strapiPosts.content)}
      </div>
    </div>

    {/* YOU MAY ALSO LIKE SECTION */}
    <h3 style={{
      fontWeight: `normal`
    }}>You might also like</h3>
    <hr></hr>

    <div class="container-fluid">
      <div class="row">
        {data.strapiPosts.relatedPosts.map(documents => (

          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">

            <br />
            <Link style={{
              color: `black`,
              textDecoration: `none`,
            }} to={`/Posts_${documents.id}`}>
              <Img fixed={documents.previewImage.childImageSharp.fixed} />
            </Link>
          </div>
        ))}
      </div>

    </div>


    {/* COMMENT SECTION */}

    <h3 style={{
      fontWeight: `normal`, float: `left`
    }}>Leave a comment</h3>

    <h3 style={{
      fontWeight: `normal`, clear: `both`
    }}>Your email address will not be published. Required field are marked * </h3>


    <iframe name="hiddenFrame" width="0" height="0" border="0" style={{ display: `none` }}></iframe>
    {/* target="hiddenFrame"*/}
    <form action="https://getform.io/f/908635e1-4bcd-4b44-a407-418c4ddcb77d" method="POST" >
      <textarea style={{
        width: `95%`,
        maxWidth: `95%`
      }} id="comment" name="comment" rows="8"> </textarea>

      <div>
        <div style={{ float: `left`, width: `25%` }}>
          <h3>Name</h3>
          <input name="name" style={{ height: `3vw`, width: `20vw` }} type="text" placeholder="Name (Required)"></input>
        </div>

        <div style={{ float: `left`, width: `25%` }}>
          <h3>Email</h3>
          <input name="email" style={{ height: `3vw`, width: `20vw` }} type="email" placeholder="Email (Required)"></input>
        </div>
        <div style={{ float: `left`, width: `25%` }}>
          <h3>Website</h3>
          <input name="website" style={{ height: `3vw`, width: `20vw` }} type="url" placeholder="Website"></input>
        </div>
        <div style={{ float: `clear`, width: `25%` }} ></div>
        <div style={{ float: `clear`, width: `25%` }} ></div>
        <br></br>
        <div style={{ float: `left`, width: `100%` }}>
          <button onClick="window.location.reload()" type="submit"> Send</button>
        </div>
      </div>

    </form>

    <br></br>

  </Layout>
)
export default ArticleTemplate
export const query = graphql`
query ArticleTemplate ($id: String!) {

  strapiPosts(id: { eq: $id }) {
        title
        image{
          absolutePath
          childImageSharp{
              fixed(width: 1220) {
                base64
                width
                height
                src
                srcSet
            }
          }
        }

        image{
          absolutePath
          childImageSharp{
            fluid(maxWidth: 1900) {
              ...GatsbyImageSharpFluid
            }
          }
        }

    		relatedPosts{
          id
          title
          previewText
          previewImage{
            absolutePath
            childImageSharp{
                fixed(width: 300) {
                  base64
                  width
                  height
                  src
                  srcSet
              }
            }
          }
        }
        readLength
        language
        content
   }

   
}
`


// allStrapiPosts {
//   edges {
//     node {
//       relatedPosts{
//         id
//         title
//         previewImage{
//           childImageSharp{
//                 fixed(width: 400) {
//                   base64
//                   width
//                   height
//                   src
//                   srcSet
//               }
//             }
//         }
//       }
//     }
//   }
// }