/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Layout from "gatsby-theme-ui/src/components/Layout";
import Link from "gatsby-theme-ui/src/components/Link";
import SEO from "gatsby-theme-ui/src/components/SEO";

export default () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>Hello world!</Styled.h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias est
      maxime eaque minus magnam dolores molestiae aliquid minima culpa animi?
    </p>
    <Styled.ul>
      <Styled.li>
        <Link to="/mdx">Mdx page</Link>
      </Styled.li>
      <Styled.li>
        <Link to="/does-not-exist">Non existent</Link>
      </Styled.li>
    </Styled.ul>
  </Layout>
);
