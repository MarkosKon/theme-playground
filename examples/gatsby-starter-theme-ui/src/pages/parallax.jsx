/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Rellax from "../components/Rellax";
import Centered from "../components/Centered";

const ParallaxPage = () => (
  <Layout>
    <SEO title="Parallax page" />
    <Styled.h1>Parallax with rellax</Styled.h1>
    <Centered sx={{ height: "50vh", bg: "accent" }}>
      <Rellax speed={2}>
        <Styled.h2>Let&apos;s</Styled.h2>
      </Rellax>
    </Centered>
    <Centered sx={{ height: "50vh", bg: "bg" }}>
      <Rellax speed={-4} percentage={0.5}>
        <Styled.h2>Do Some</Styled.h2>
      </Rellax>
    </Centered>
    <Centered sx={{ height: "50vh", bg: "primary" }}>
      <Rellax speed={4}>
        <Styled.h2>Parallax</Styled.h2>
      </Rellax>
    </Centered>
    <Centered sx={{ height: "50vh", bg: "bg" }}>
      <Rellax speed={5}>
        <Styled.h2>with</Styled.h2>
      </Rellax>
    </Centered>
    <Centered sx={{ height: "50vh", bg: "secondary" }}>
      <Rellax speed={-5} percentage={0.4}>
        <Styled.h2>Rellax</Styled.h2>
      </Rellax>
    </Centered>
  </Layout>
);

export default ParallaxPage;
