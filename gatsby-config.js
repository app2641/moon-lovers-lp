/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/favicon.png`,
      },
    },
  ],
  siteMetadata: {
    title: 'Moon Lovers - 月を生活のそばに',
    author: 'app2641',
    category: ['Moon', '月齢', 'Android'],
    user: { name: 'app2641', email: 'app2641@gmail.com' },
  },
}
