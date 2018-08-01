module.exports = {
  siteMetadata: {
    title: 'Netlify CMS example',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark',
  ],
}
