/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import Layout from "@affectionatedoor/gatsby-theme-quicker-start/src/components/Layout";
import SEO from "@affectionatedoor/gatsby-theme-quicker-start/src/components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Styled.h1>NOT FOUND</Styled.h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
