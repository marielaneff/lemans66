const config = require('./config');
const path = require(`path`);
module.exports = {
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        title: config.siteTitle,
    },
    plugins: [
    'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.manifestName,
                short_name: config.manifestShortName,
                start_url: config.pathPrefix || config.manifestStartUrl,
                background_color: config.manifestBackgroundColor,
                theme_color: config.manifestThemeColor,
                display: config.manifestDisplay,
                icon: config.manifestIcon, // This path is relative to the root of the site.
            },
            
    }, {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseUrl: `cfecm.fr`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false,
           includedRoutes: [
          "/*/*/categories",
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/tags",
          // You can toggle between media and users (or both)
          // All 3 scenarios will fail with the `'id' of undefined`
          // problem
          // "/*/*/media",
          "/*/*/users",
        ],
      }
    },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/images`,
                name: 'images'
            }
      },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,

  ],
};
