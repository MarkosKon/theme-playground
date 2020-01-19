/** @jsx jsx */
import { jsx, Main, Footer, Styled } from "theme-ui";
import PropTypes from "prop-types";

import SkipLink from "./SkipLink";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Styled.root>
      <SkipLink href="#content">Skip to main content</SkipLink>
      <Header siteTitle="A Blog" />
      <Main
        id="content"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr minmax(auto, calc(var(--rhythm) * 22)) 1fr",
          "& *": {
            gridColumn: "2/3"
          },
          py: 0,
          px: [3, 3, 0]
        }}
      >
        {children}
      </Main>
      <Footer sx={{ p: 4 }}>
        {`© ${new Date().getFullYear()}, Built with`}
        <Styled.a
          sx={{ ml: 1, variant: "links.ui" }}
          href="https://www.gatsbyjs.org"
        >
          Gatsby
        </Styled.a>
      </Footer>
    </Styled.root>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
