/** @jsx jsx */
import {
  jsx,
  Main,
  Box,
  Container,
  Footer,
  useColorMode,
  Styled
} from "theme-ui";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Button from "./Button";
import SkipLink from "./SkipLink";

import Header from "./Header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const [colorMode, setColorMode] = useColorMode();
  const newColorMode = colorMode === "light" ? "dark" : "light";
  return (
    <Styled.root>
      <SkipLink>Skip to content</SkipLink>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box sx={{ py: 3, px: [2, 3], textAlign: "right" }}>
        <Button
          sx={{ borderRadius: "2px" }}
          onClick={() => {
            document.body.classList.remove(colorMode);
            document.body.classList.add(newColorMode);
            setColorMode(newColorMode);
          }}
        >
          {`Toggle ${newColorMode}`}
        </Button>
      </Box>
      <Main sx={{ minHeight: "76vh" }}>
        <Container id="content">{children}</Container>
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
  children: PropTypes.node.isRequired
};

export default Layout;
