/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "@affectionatedoor/gatsby-theme-quicker-start/src/components/Link";
import Layout from "@affectionatedoor/gatsby-theme-quicker-start/src/components/Layout";
import SEO from "@affectionatedoor/gatsby-theme-quicker-start/src/components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>Available pages</Styled.h1>
    <Styled.ul>
      <Styled.li>
        <Link to="/cards/">Card components</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/grid/">Grid layout</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/slider/">Slider</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/aos/">Animation on scroll</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/bgimage/">Background image</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/icons/">FontAwesome Icons</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/parallax/">Parallax</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/page-2/">Go to page 2</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/mdx-page/">Mdx</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/sss/">Non existent</Link>
      </Styled.li>
    </Styled.ul>
  </Layout>
);

export default IndexPage;
