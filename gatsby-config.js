module.exports = {
  siteMetadata: {
    title: `Mitul Mistry - Web Developer`,
    description: `Mitul Mistry is a full stack web developer with experience in Rails and React.`,
    author: `@Jackal_MM`,
    siteUrl: `https://mitulmistry.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mm-webdev-portfolio-v3`,
        short_name: `MitulMistryPortfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
