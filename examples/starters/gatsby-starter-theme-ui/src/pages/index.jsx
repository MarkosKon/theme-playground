/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "../components/Link";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>Hi people</Styled.h1>
    <p>
      Welcome to your new, <strong> strong Gatsby site.</strong>
    </p>
    <p>
      <i>Now go build something italic.</i>
    </p>
    <p>
      <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing elit.
      Quisquam libero quis odit fuga molestias laudantium ut eaque? Vel
      inventore cupiditate odit iusto quisquam, dolor, nemo aliquid nam veniam
      mollitia numquam, tempora perferendis fuga? Quaerat, incidunt! Molestiae a
      aperiam laborum consequuntur?
    </p>
    <Styled.h2>Example pages</Styled.h2>
    <Styled.ul>
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
