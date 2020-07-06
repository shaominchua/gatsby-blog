import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import "../static/global.css"
import ReactHtmlParser from "react-html-parser"

const ArticleTemplate = ({ data }) => (
  <Layout style={{
    overflow: `hidden`
  }}>
    <Img fixed={data.strapiPosts.image.childImageSharp.fixed} />

    <div style={{
      marginLeft: `5%`
    }}>
      <div>Length: {data.strapiPosts.readLength}</div>
      <h4>Language: {data.strapiPosts.language}</h4>
      <h1>{data.strapiPosts.title}</h1>

      <div style={{
        overflow: `hidden`
      }}>
        {ReactHtmlParser(data.strapiPosts.content)}
      </div>
    </div>
    <hr></hr>
    <h3 style={{
      fontWeight: `normal`
    }}>You might also like</h3>
    
    <ul style={{
      listStyleType: `none`,
      float: `left`
    }}>
      {data.strapiPosts.relatedPosts.map(documents => (
          <li style={{
            float: `left`,
            width: `33%`
          }} key={documents.id}> 
              <div style={{
                float: `left`,
                width: `80%`
              }}>
                <Img fixed={documents.previewImage.childImageSharp.fixed}/>
                <br/>
                <Link style={{
                  color: `black`,
                  textDecoration: `none`,
                }} to={`/Posts_${documents.id}`}>{documents.title}</Link>
              </div>
        
          </li>
          
      ))}
     
    </ul>
   {/* <Link to="/page-2/">Go to page 2</Link> */}
    <br style={{
      clear: `both`
    }}></br>

    <div style={{
      float: `clear`
    }}></div>
    <h3 style={{
      fontWeight: `normal` ,  float: `left`
    }}>Leave a comment</h3>

    <h3 style={{
      fontWeight: `normal`,  clear: `both`
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
        <div style={{ float: `left`, width: `100%` }}>
          <button onClick="window.location.reload()" type="submit"> Send</button>
        </div>
      </div>

    </form>

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
    		relatedPosts{
          id
          title
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