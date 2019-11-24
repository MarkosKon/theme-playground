/* eslint-disable react/prop-types */
// Flexbox gap https://codepen.io/vkjgr/pen/myrVKr
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { graphql } from "gatsby";

import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import Link from "@affectionatedoor/gatsby-theme-ui/src/components/Link";
import SEO from "@affectionatedoor/gatsby-theme-ui/src/components/SEO";
import {
  SimpleCard,
  ClickableCard
} from "@affectionatedoor/gatsby-theme-ui/src/components/Cards";

import cat from "../images/cat.jpg";

const gap = 16;

const CardsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes.map(post => post.frontmatter);
  return (
    <Layout>
      <SEO title="Card components" />
      <Styled.h1>Card components</Styled.h1>
      {/* eslint-disable */}
      <p>
        In this page I list some card components you can use. They are not 100%
        reusable; you can copy the code in a new component and change it. The
        title of the cards are <Styled.code>h2</Styled.code> where, in this
        case, they should have been
        <Styled.code> h3</Styled.code>.
      </p>
      {/* eslint-enable */}
      <Link to="/">Go back to the homepage</Link>
      <Styled.h2>Simple card</Styled.h2>
      <Styled.ul
        sx={{
          listStyle: "none",
          pl: 0,
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
          p: `${gap / 2}px`
        }}
      >
        {posts.map(({ title, description }) => (
          <SimpleCard
            key={title}
            title={title}
            url="/cards/#"
            text={description}
            image={cat}
          />
        ))}
      </Styled.ul>
      <Styled.h2>Clickable card</Styled.h2>
      <Styled.ul
        sx={{
          listStyle: "none",
          pl: 0,
          display: "flex",
          flexWrap: "wrap",
          margin: "0 auto",
          p: `${gap / 2}px`
        }}
      >
        {posts.map(({ title, description, tags }) => (
          <ClickableCard
            key={title}
            title={title}
            url="/cards/#"
            tags={tags}
            text={description}
            image={cat}
          />
        ))}
      </Styled.ul>
    </Layout>
  );
};

export const query = graphql`
  query CardPageQuery {
    allMarkdownRemark(limit: 6) {
      nodes {
        frontmatter {
          title
          url
          image
          description
          tags
        }
      }
    }
  }
`;

export default CardsPage;
