module.exports = {
  siteMetadata: {
    title: "Haeun's Blog",
    description:
      '주니어 프론트엔드 개발자 최하은 입니다.',
    url: 'https://cuihaen.github.io',
    lang:'ko',
    author: 'Haeun Choi',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'Alticles',
    menuLinks: [
      {
        name: "Haeun's Blog",
        slug: '/',
      },
      {
        name: 'About Me',
        slug: '/about/',
      },
      {
        name: 'Portfolio',
        slug: '/portfolio/',
      },
    ],
    footerLinks: [
      {
        name: 'Github',
        url: 'https://github.com/cuihaen',
      },
      
      {
        name: 'Contact',
        url: 'mailto:choi_haeun367@naver.com',
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
        name: `Haeun's blog`,
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
