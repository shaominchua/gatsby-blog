
import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import ReactHtmlParser from "react-html-parser"


const IndexPage = ({ data }) => {
  return (
    <>

      <Helmet>
        {/* <style type="text/css">{`${post.codeinjection_styles}`}</style> */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Helmet>
      <Layout>

        {/* <div style={{
          overflow: `hidden`,
          color: `black`
        }}>
          {data.allStrapiHomes.edges.map(documents => (
            <div class="container-fluid">
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-lg-12" >{ReactHtmlParser(documents.node.imageSlider)}</div>
              </div>
            </div>
          ))}
        </div> */}
        <br></br>

        <div class="container-fluid" style={{ backgroundColor: `#E2E2E2` }} >
          <div class="row" style={{ marginBottom: `1%` }}>
            <div class="col-xs-12 col-sm-12 col-lg-12" style={{ textAlign: `center`, fontFamily: `Source Sans Pro`, fontSize: `16px` }} >Stay Connected</div>
          </div>
          <div class="row" style={{ marginBottom: `1%` }}>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ textAlign: `center`, fontFamily: `Source Sans Pro`, fontSize: `16px`, fontWeight: `bold` }} >Pastor Tan Seow How (Pastor How) &nbsp;
            <a href="https://www.instagram.com/pastor.how/">
                <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/insta.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/insta.png" class="socialMediaFull ls-is-cached lazyloaded" alt="pastorhow instagram"></img>
              </a>
              <a href="https://www.facebook.com/pastorhow">
                <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/face.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/face.png" class="socialMediaFull ls-is-cached lazyloaded" alt="pastorhow facebook"></img>

              </a>
              <a href="https://twitter.com/seowhow">
                <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/twee.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/twee.png" class="socialMediaFull ls-is-cached lazyloaded" alt="pastorhow twitter"></img>

              </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ textAlign: `center`, fontFamily: `Source Sans Pro`, fontSize: `16px`, fontWeight: `bold`}} >Pastor Cecilia Chan (Pastor Lia) &nbsp;
            <a href="https://www.instagram.com/pastor.lia">
                <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/insta.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/insta.png" class="socialMediaFull ls-is-cached lazyloaded" alt="pastorlia instagram" />
              </a>

              <a href="https://www.facebook.com/pastorlia">
                <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/face.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/face.png" class="socialMediaFull ls-is-cached lazyloaded" alt="pastorlia facebook"></img>
              </a>

              <a href="https://twitter.com/lia_chan">
                <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/twee.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/twee.png" class="socialMediaFull ls-is-cached lazyloaded" alt="pastorlia twitter" />
              </a>

            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{ textAlign: `center`, fontFamily: `Source Sans Pro`, fontSize: `16px`, fontWeight: `bold` }} >Heart of God Church (Singapore) &nbsp;
            <a href="https://www.instagram.com/hogc">
            <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/insta.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/insta.png" class="socialMediaFull ls-is-cached lazyloaded" alt="pastorlia instagram"></img>

            </a>
            <a href="https://www.facebook.com/HOGCsg">
            <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/face.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/face.png" class="socialMediaFull ls-is-cached lazyloaded" alt="hogc facebook"></img>

            </a>
            <a href="https://twitter.com/hogc">
            <img src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/twee.png" data-src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://pastorhow.com/wp-content/uploads/2019/10/twee.png" class="socialMediaFull ls-is-cached lazyloaded" alt="hogc twitter"></img>
            </a>
            </div>
          </div>
        </div>

        <h2 style={{
          listStyleType: `none`,
          marginLeft: `1.5%`
        }}>Latest</h2>
        <hr style={{
          listStyleType: `none`,
          marginLeft: `1.5%`,
          height: `2px`,
          backgroundColor: `black`
        }}></hr>


        <div class="container-fluid">
          <div class="row">

            {data.allStrapiPosts.edges.map(document => (
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <p>
                  <Img fixed={document.node.previewImage.childImageSharp.fixed} />
                  <br></br>
                  <Link style={{
                    color: `black`,
                    textDecoration: `none`,
                    fontFamily: `Source Sans Pro`, fontSize: `20px`
                  }} to={`/${document.node.id}`}>{document.node.previewText}</Link>
                </p>
              </div>
            ))}

          </div>
        </div>
        <div></div>

        <div class="container-fluid">
          <div >

            {data.allStrapiSeriesses.edges.map(documents => (
              <div class="row">
                <h2>{documents.node.title}</h2>
                <hr style={{
                  // listStyleType: `none`,
                  // marginLeft: `1.5%`,
                  height: `2px`,
                  backgroundColor: `black`,
                  width: `100%`,
                }}></hr>
                {documents.node.posts.map(documentss =>
                  (
                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                      <p>
                        <Img fixed={documentss.previewImage.childImageSharp.fixed} />
                        <br />
                        <Link style={{
                          color: `black`,
                          textDecoration: `none`, fontFamily: `Source Sans Pro`, fontSize: `20px`
                        }} to={`/Posts_${documentss.id}`}>{documentss.previewText}</Link>
                      </p>
                    </div>

                  )
                )}
                <br></br>

              </div>
            ))}

          </div>
        </div>

        <h2 style={{
          listStyleType: `none`,
          marginLeft: `1.5%`
        }}>About</h2>

        <div style={{
          overflow: `hidden`,
          color: `black`,
          backgroundColor:`#F9F9F9`
        }}>
          {data.allStrapiHomes.edges.map(documents => (
            <div class="container-fluid">
              <div>
                {ReactHtmlParser(documents.node.about)}
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`  
query LandingPage {
  allStrapiHomes {
    edges {
      node{
        about,
        footer
      }
    }
  }

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

