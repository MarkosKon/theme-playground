/** @jsx jsx */
import { useEffect } from "react";
import { jsx, Styled, Box } from "theme-ui";
import sal from "sal.js";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Centered from "../components/Centered";
import Sal from "../components/Sal";

import "sal.js/dist/sal.css";

const AOSPage = () => {
  useEffect(() => {
    sal();
  }, []);
  return (
    <Layout>
      <SEO title="Animation on scroll" />
      <Styled.h1>Animation on scroll</Styled.h1>
      <Box>
        <Box sx={{ height: "100vh", bg: "secondary" }}>
          <Centered>
            <Sal delay="500">
              <Styled.h2 sx={{ fontSize: [7, 8] }}>Hello</Styled.h2>
            </Sal>
          </Centered>
        </Box>
        <Box sx={{ height: "100vh", bg: "background", color: "orangered" }}>
          <Centered>
            <Sal duration="2000">
              <Styled.h2 sx={{ fontSize: [7, 8] }}>World</Styled.h2>
            </Sal>
          </Centered>
        </Box>
        <Box sx={{ height: "100vh", bg: "accent", color: "white" }}>
          <Centered>
            <Sal delay="300" duration="300" animation="flip-right">
              <Styled.h2 sx={{ fontSize: [7, 8] }}>!!!</Styled.h2>
            </Sal>
          </Centered>
        </Box>
      </Box>
    </Layout>
  );
};

export default AOSPage;
