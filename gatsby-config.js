module.exports = {
  siteMetadata: {
    title: "Haeun's Blog",
    description:
      'John Doe is a lifestyle photographer based in San Francisco, CA',
    url: 'https://cuihaen.github.io',
    author: 'Haeun Choi',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'Welcome',
    menuLinks: [
      {
        name: "Haeun's Blog",
        slug: '/',
      },
      {
        name: 'About Me',
        slug: '/about/',
      },
    ],
    footerLinks: [
      {
        name: 'Visit my portfolio →',
        url: 'https://haeun367.cafe24.com/profile',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
