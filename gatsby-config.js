const path = require(`path`)

const ANALYZE = process.env.ANALYZE === '1'

module.exports = {
  siteMetadata: {
    title: `Gatsbygram`,
  },
  plugins: [
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins.  You can source data nodes from anywhere but
     * most sites, like Gatsbygram, will include data from
     * the filesystem so we start here with
     * “gatsby-source-filesystem”.
     *
     * A site can have as many instances of
     * gatsby-source-filesystem as you need.  Each plugin
     * instance is configured with a root path where it then
     * recursively reads in files and adds them to the data
     * tree.
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    // This plugin exposes helper functions for processing
    // images with the NPM package “sharp”. It's used by
    // several other plugins.
    `gatsby-plugin-sharp`,
    // This plugin identifies file nodes that are images and
    // transforms these to create new “ImageSharp” nodes.
    // With them you can resize images and
    // generate responsive image thumbnails.
    `gatsby-transformer-sharp`,
    // This plugin transforms JSON file nodes.
    `gatsby-transformer-json`,
    // This plugin sets up the popular css-in-js library
    // Glamor. It handles adding a Babel plugin and webpack
    // configuration as well as setting up optimized server
    // rendering and client re-hydration.
    `gatsby-plugin-glamor`,
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeLinkHeaders: false,
        mergeCachingHeaders: false,
        mergeSecurityHeaders: true,
        headers: {
          '/*.js': [
            `Cache-Control: public, max-age=31536000,immutable`,
            'Content-Type: text/javascript',
          ],
          '/*.css': [
            `Cache-Control: public, max-age=31536000,immutable`,
            'Content-Type: text/javascript',
          ],
        },
      },
    },
    // This plugin sets up Google Analytics for you.
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-91652198-1`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    ANALYZE && {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'static',
        analyzerPort: '3001',
      },
    },
  ].filter(Boolean),
}
