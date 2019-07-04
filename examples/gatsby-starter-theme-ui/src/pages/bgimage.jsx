/* eslint-disable react/prop-types */
/** @jsx jsx */
import { jsx, Flex, Box, Styled } from "theme-ui";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import Centered from "../components/Centered";

import Link from "../components/Link";
import BgImage from "../components/BgImage";

const Separator = () => <Box sx={{ height: "30vh" }} />;

const BgPage = ({ data }) => {
  const { university, desert, apartment } = data;
  return (
    <Box sx={{ color: "background", fontFamily: "body" }}>
      <SEO title="Home" keywords={["gatsby", "application", "react"]} />
      <BgImage
        title="university"
        fluid={university.childImageSharp.fluid}
        overlayColor="#04040454"
        height="100vh"
      >
        <Centered sx={{ p: 3, color: "white" }}>
          <Styled.h1>1800 x 1119</Styled.h1>
          <p sx={{ fontSize: 4 }}>The height is 100vh</p>
        </Centered>
      </BgImage>
      <Separator />
      <BgImage
        title="desert"
        fluid={desert.childImageSharp.fluid}
        overlayColor="#04040454"
        height="100vh"
      >
        <Centered sx={{ p: 3, color: "white" }}>
          <Styled.h1>1280 x 1802</Styled.h1>
          <p sx={{ fontSize: 4 }}>The height is 100vh</p>
        </Centered>
      </BgImage>
      <Separator />
      <BgImage
        title="desert small"
        fluid={desert.childImageSharp.fluid}
        overlayColor="#2d033c9c"
        height="50vh"
      >
        <Centered sx={{ p: 3, color: "white" }}>
          <Styled.h1>1280 x 1802</Styled.h1>
          <p sx={{ fontSize: 4 }}>The height is 50vh</p>
        </Centered>
      </BgImage>
      <Separator />
      <Flex sx={{ flexWrap: "wrap", color: "text" }}>
        <Box sx={{ width: ["100%", "50%"], bg: "azure" }}>
          <Centered sx={{ color: "black", p: 4 }}>
            <Styled.h2>Title</Styled.h2>
            <p sx={{ fontSize: 4 }}>Lorem40</p>
          </Centered>
        </Box>
        <Box sx={{ width: ["100%", "50%"] }}>
          <BgImage
            title="apartment"
            fluid={apartment.childImageSharp.fluid}
            overlayColor="#04040454"
          >
            <Centered sx={{ p: 3, color: "white" }}>
              <Styled.h1>1280 x 720</Styled.h1>
              <p sx={{ fontSize: 4 }}>No height</p>
            </Centered>
          </BgImage>
        </Box>
      </Flex>
      <Separator />
      <Link to="/">Go back</Link>
    </Box>
  );
};

export const query = graphql`
  query {
    university: file(relativePath: { eq: "slider-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    desert: file(relativePath: { regex: "/desert/i" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    apartment: file(relativePath: { regex: "/apartment/i" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default BgPage;
