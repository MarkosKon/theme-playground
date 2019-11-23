/** @jsx jsx */
import { jsx, Main, Container, Footer, Styled } from "theme-ui";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import SkipLink from "@affectionatedoor/gatsby-theme-ui/src/components/SkipLink";
import Header from "@affectionatedoor/gatsby-theme-ui/src/components/Header";

const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Styled.root>
      <SkipLink>Skip to content</SkipLink>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main sx={{ minHeight: "78vh" }}>
        <Container
          id="content"
          className={className}
          sx={{ maxWidth: "672px", pt: 0 }}
        >
          {children}
        </Container>
      </Main>
      <Footer sx={{ p: 4 }}>
        {`© ${new Date().getFullYear()}, Built with`}
        <Styled.a
          sx={{ color: "primary", ml: 1 }}
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </Styled.a>
      </Footer>
    </Styled.root>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Layout.defaultProps = {
  className: null
};

export default Layout;
