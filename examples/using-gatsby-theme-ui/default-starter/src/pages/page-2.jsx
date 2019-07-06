/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import SEO from "@affectionatedoor/gatsby-theme-ui/src/components/SEO";
import Link from "@affectionatedoor/gatsby-theme-ui/src/components/Link";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Styled.h1>Hi from the second page</Styled.h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
