/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Layout from "gatsby-theme-ui/src/components/Layout";
import SEO from "gatsby-theme-ui/src/components/SEO";
import Link from "gatsby-theme-ui/src/components/Link";

import Image from "../components/image";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>Hi people</Styled.h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div sx={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Styled.ul>
      <Styled.li>
        <Link to="/mdx-page">Mdx page</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/page-2/">Go to page 2</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/does-not-exist">Non existent</Link>
      </Styled.li>
    </Styled.ul>
  </Layout>
);

export default IndexPage;
