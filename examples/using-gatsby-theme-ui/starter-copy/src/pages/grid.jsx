/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui";

import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import SEO from "@affectionatedoor/gatsby-theme-ui/src/components/SEO";
import {
  Row,
  Column
} from "@affectionatedoor/gatsby-theme-ui/src/components/Grid";

// eslint-disable-next-line react/prop-types
const ColumnContent = ({ children }) => (
  <Box
    sx={{
      bg: "primary",
      color: "background",
      minHeight: "300px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 8
    }}
  >
    {children}
  </Box>
);

const GridPage = () => (
  <Layout>
    <SEO title="Grid examples" />
    <Styled.h1>Grid examples</Styled.h1>
    <Styled.p>How to create a Grid layout with Flexbox.</Styled.p>
    <article>
      <Styled.h2>A. Flexbox grid with theme-ui</Styled.h2>
      <Styled.p>
        Notice at the top right of 7 that the columns don&apos;t align&nbsp;
        perfectly—on desktop screens. This is because the width is&nbsp;
        <Styled.code>calc(100/3)</Styled.code>
      </Styled.p>
      <Flex sx={{ flexFlow: "row wrap" }}>
        <Box sx={{ width: ["100%", "50%", "calc(100%/3)"] }}>
          <ColumnContent>1</ColumnContent>
        </Box>
        <Box sx={{ width: ["100%", "50%", "calc(100%/3)"] }}>
          <ColumnContent>2</ColumnContent>
        </Box>
        <Box sx={{ width: ["100%", "50%", "calc(100%/3)"] }}>
          <ColumnContent>3</ColumnContent>
        </Box>
        <Box sx={{ width: ["100%", "50%", "calc(100%/3)"] }}>
          <ColumnContent>4</ColumnContent>
        </Box>
        <Box sx={{ width: ["100%", "50%", "calc(100%/3)"] }}>
          <ColumnContent>5</ColumnContent>
        </Box>
        <Box sx={{ width: ["100%", "50%", "calc(100%/3)"] }}>
          <ColumnContent>6</ColumnContent>
        </Box>
        <Box sx={{ width: "100%" }}>
          <ColumnContent>7</ColumnContent>
        </Box>
      </Flex>
    </article>
    <article>
      <Styled.h2>
        B. Flexbox grid with custom components from the theme
      </Styled.h2>
      <Row
        gutters
        gutterSize="7.5px"
        as="ul"
        sx={{ listStyle: "none", padding: 0 }}
      >
        <Column as="li" sm="50%" md="calc(100%/3)">
          <ColumnContent>1</ColumnContent>
        </Column>
        <Column as="li" sm="50%" md="calc(100%/3)">
          <ColumnContent>2</ColumnContent>
        </Column>
        <Column as="li" sm="50%" md="calc(100%/3)">
          <ColumnContent>3</ColumnContent>
        </Column>
        <Column as="li" sm="50%" md="calc(100%/3)">
          <ColumnContent>4</ColumnContent>
        </Column>
        <Column as="li" sm="50%" md="calc(100%/3)">
          <ColumnContent>5</ColumnContent>
        </Column>
        <Column as="li" sm="50%" md="calc(100%/3)">
          <ColumnContent>6</ColumnContent>
        </Column>
        <Column as="li">
          <ColumnContent>7</ColumnContent>
        </Column>
      </Row>
    </article>
  </Layout>
);

export default GridPage;
