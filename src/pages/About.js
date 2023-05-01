import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'
import styled from '@emotion/styled'

const Title = styled.h2`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 1.2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.4rem;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  p {
    line-height: 1.5;
    margin: 0 0 1.75rem;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
  code {
    font-family: ${props => props.theme.fonts.monospace};
    font-size: 0.9rem;
    padding: 0.25rem;
    background: ${props => props.theme.colors.code};
    color: ${props => props.theme.colors.text};
    border-radius: 0.3em;
  }
`

const AboutPage = ({ data }) => {
  return (
    <Container>
      <SEO title="About" description="This is just an example page" />
      <Title>“I may not be there yet, but I’m closer than I was yesterday.”</Title>
      <Content>
        <p>
          해당 페이지는 내용 준비중입니다.
         {/* 꾸준한 성장을 통해 더 나은 내가 되고 이를 통해 사회에 기여하고 싶은 최하은입니다.{' '} */}
          {/* <a
            href="https://www.gatsbyjs.org/docs/recipes/#creating-pages-automatically"
            target="_blank"
            rel="noopener noreferrer"
          >
            created automatically
          </a>{' '}
          by placing a <code>React</code> component in <code>src/pages/</code>.
          In the source code you will see an example of how to{' '}
          <a
            href="https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadow
          </a>{' '}
          components available in the theme such as the <code>Container</code>,{' '}
          and <code>SEO</code> components. Additionally you will see how theme
          values can be used with <code>Emotion</code> via the
          <code>styled-components</code> syntax.
        </p>
        <p>
          For more information about the Gatsby theme powering this website
          visit the{' '}
          <a
            href="https://github.com/ryanwiemer/gatsby-theme-amsterdam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby Theme Amsterdam GitHub Repo
          </a>
          . */}
        </p>
      </Content>
    </Container>
  )
}

export default AboutPage
