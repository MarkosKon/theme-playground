/** @jsx jsx */
import { jsx, Main, Container, Footer, Styled } from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import SkipLink from "./SkipLink";
import Header from "./Header";

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
      <Main sx={{ minHeight: "70vh" }}>
        <Container id="content" className={className}>
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
