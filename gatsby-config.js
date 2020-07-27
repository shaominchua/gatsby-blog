module.exports = {
  siteMetadata: {
    title: `PASTORHOW.COM`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: 'About',
        link: '/'
      },
      {
        name: 'Thoughts & Article',
        link: '/'
      },
      {
        name: 'Messages',
        link: '/'
      },
      {
        name: 'Resources',
        link: '/'
      },
      {
        name: 'Heart of God Church',
        link: 'https://heartofgodchurch.org/'
      }
    ]
  },
  plugins: [

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-strapi',
      options: {
        // apiURL: process.env.DEPLOY_URL ? 'https://strapi-headless-cms.herokuapp.com' :'http://localhost:1337',
        apiURL:"https://strapi-headless-cms.herokuapp.com",
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'articles',
          'users',
          'posts',
          'seriesses',
          'categories',
          'homes'
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-offline',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
