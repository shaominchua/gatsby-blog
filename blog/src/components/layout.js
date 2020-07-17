/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Helmet from "react-helmet"
import ReactHtmlParser from "react-html-parser"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//           menuLinks {
//             name
//             link
//           }
//         }
//       }

//       allStrapiHomes {
//         edges {
//           node{
//             imageSlider,
//             about,
//             footer
//           }
//         }
//       }
//     }


//   `)



//   return (
//     <>
//       {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
//       <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />

//       <div
//         style={{
//           // margin: `0 auto`,
//           // maxWidth: 960,
//           padding: `0 1.0875rem 1rem`
//         }}
//       >
//         <main>{children}</main>
//         <footer style={{
//           float: `left`,
//           display: `inline-block`,
//           width: `100%`
//         }}>
//           {data.allStrapiHomes.edges.map(documents => (
//             <div>{ReactHtmlParser(documents.node.footer)}</div>
//           ))}
//         </footer>
//       </div>
//     </>
//   )
// }




const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }

        allStrapiHomes {
          edges {
            node{
              imageSlider,
              about,
              footer
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title={'Gatsby'}
          meta={[
            { name: 'description', content: 'Gatsby Blog' },
          ]}
        >
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </Helmet>
        <Header style={{ color: `black` }} menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0% 0% 0% 1%',
            // maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>

        <footer style={{
          float: `left`,
          display: `inline-block`,
          width: `100%`
        }}>
          {data.allStrapiHomes.edges.map(documents => (
            <div>{ReactHtmlParser(documents.node.footer)}</div>
          ))}
        </footer>
      </React.Fragment>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

