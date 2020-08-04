const config = {
  siteTitle: 'The Shape of Stories', // Site title.
  siteTitleShort: 'The Shape of Stories', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'The Shape of Stories', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://gatsby-markdown-blog-starter.netlify.com', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'Here we are, trapped in the amber of the moment. There is no why.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-174518366-1', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Seth Anand', // Username to display in the author segment.
  userEmail: 'sethbalodi@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'gatsbyjs', // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: 'shashwb', // Optionally renders "Follow Me" in the Bio segment.ß
  userLocation: 'Manhattan, NYC', // User location to display in the author segment.
  userAvatar: 'https://avatars.githubusercontent.com/shashwb', // User avatar to display in the author segment.
  userDescription:
    "I was a victim of a series of accidents, as are we all.", // User description to display in the author segment.
  copyright: 'Copyright © 2020. All rights reserved.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '6f0000', // Used for setting manifest and progress theme colors.
  backgroundColor: 'red', // Used for setting manifest background color.
  
  /**
   * This configs is used to extract particular categories from graphql depending
   * on which 'Shape' the user has selected
   */
  shapesMappingToCategories: {
    Stories: [
      'Anime',
      'Film',
      'Television',
      'Novels',
      'Original Content',
    ],
    Polygons: [
      'Adventure',
      'Mystery'
    ],
    Sounds: [
      'Hip Hop',
      'Pop Punk',
      'Emo',
    ],
    Cities: [
      'New York City',
      'Richmond',
    ]
  }
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config
