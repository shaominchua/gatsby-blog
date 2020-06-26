import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import "../static/global.css"
import ReactHtmlParser from  "react-html-parser"

const ArticleTemplate = ({ data }) => (
  <Layout style={{
    overflow: `hidden`
  }}>
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

      {/* <div
      dangerouslySetInnerHTML={{
        __html: data.strapiPosts.content
      }}></div> */}
      <div style={{
    overflow: `hidden`
  }}>
        {ReactHtmlParser(data.strapiPosts.content)}
      </div>
      {/* <ReactMarkdown source={data.strapiPosts.content}  transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`} /> */}

      <p></p>
      <p></p>
      <hr></hr>
      <h2  style={{
        fontWeight:`normal`}}>Leave a comment</h2> 
       <h2  style={{
        fontWeight:`normal`}}>Your email address will not be published. Required field are marked * </h2> 

     
      <p></p>
      <iframe name="hiddenFrame" width="0" height="0" border="0" style={{display: `none`}}></iframe>
      {/* target="hiddenFrame"*/}
      <form action="https://getform.io/f/908635e1-4bcd-4b44-a407-418c4ddcb77d" method="POST" >
        <h2>Comment</h2>
        <textarea  style={{
        width:`95%`, 
        maxWidth:`95%`}} id="comment" name="comment" rows="8"> </textarea>

        <div>
          <div style={{float:`left`, width: `25%` }}>
            <h2>Name</h2>
            <input name="name" style={{height: `3vw`, width: `20vw` }} type="text" placeholder="Name (Required)"></input>
          </div>

          <div style={{float:`left`, width: `25%`}}>
            <h2>Email</h2>
            <input name="email" style={{height: `3vw`, width: `20vw` }}  type="email"  placeholder="Email (Required)"></input>
          </div>
          <div style={{float:`left`, width: `25%`}}>
            <h2>Website</h2>
            <input name="website" style={{height: `3vw`, width: `20vw` }} type="url" placeholder="Website"></input>
          </div>
          <div style={{float:`clear`, width: `25%`}} ></div>
          <div style={{float:`left`, width: `100%`}}>
            <button onClick="window.location.reload()" type="submit"> Send</button>
          </div>
        </div>

      </form>
  
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
            fixed(width: 1550) {
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