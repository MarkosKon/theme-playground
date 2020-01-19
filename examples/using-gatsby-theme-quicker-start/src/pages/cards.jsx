/* eslint-disable react/prop-types */
// Flexbox gap https://codepen.io/vkjgr/pen/myrVKr
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { graphql } from "gatsby";

import Layout from "@affectionatedoor/gatsby-theme-quicker-start/src/components/Layout";
import Link from "@affectionatedoor/gatsby-theme-quicker-start/src/components/Link";
import SEO from "@affectionatedoor/gatsby-theme-quicker-start/src/components/SEO";
import {
  SimpleCard,
  ClickableCard,
  ClickableCardAlt
} from "@affectionatedoor/gatsby-theme-quicker-start/src/components/Cards";

import cat from "../images/cat.jpg";

const gap = 16;

const ulStyles = {
  listStyle: "none",
  pl: 0,
  display: "flex",
  flexWrap: "wrap",
  margin: "0 auto",
  p: `${gap / 2}px`,
  gridColumn: "1/4"
};
const cardStyles = {
  width: [
    `calc(100% - ${16}px)`,
    `calc(50% - ${16}px)`,
    `calc(33% - ${16}px)`,
    `calc(25% - ${16}px)`
  ],
  m: `8px`
};

const CardsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes.map(post => post.frontmatter);
  return (
    <Layout>
      <SEO title="Card components" />
      <Styled.h1>Card components</Styled.h1>
      <Styled.p>
        In this page I list some card components you can use. They are not 100%
        reusable; you can copy the code in a new component and change it. The
        title of the cards are <Styled.code>h2</Styled.code> where, in this
        case, they should have been
        <Styled.code> h3</Styled.code>.
      </Styled.p>
      <Styled.p>
        A React implementation of{" "}
        <Styled.a href="https://inclusive-components.design/cards/">
          inclusive card components
        </Styled.a>{" "}
        with some minor improvements.
      </Styled.p>
      <Link to="/">Go back to the homepage</Link>
      <Styled.h2>A. Simple card</Styled.h2>
      <Styled.p>
        Best solution if the card has text because the user can select the text.
        The links are underlined to make it obvious they are links.
      </Styled.p>
      <Styled.ul sx={ulStyles}>
        {posts.map(({ title, description }) => (
          <SimpleCard
            key={title}
            title={title}
            url="/cards/#"
            text={description}
            image={cat}
            sx={cardStyles}
          />
        ))}
      </Styled.ul>
      <Styled.h2>B. Clickable card</Styled.h2>
      <Styled.p>
        The whole card is clickable, but you can&apos;t select the text inside
        the card. Many cards on the web are like this one. The card also has
        links inside it.
      </Styled.p>
      <Styled.ul sx={ulStyles}>
        {posts.map(({ title, description, tags }) => (
          <ClickableCard
            key={title}
            title={title}
            url="/cards/#"
            tags={tags}
            text={description}
            image={cat}
            sx={cardStyles}
          />
        ))}
      </Styled.ul>
      <Styled.h2>C. Clickable card alternative</Styled.h2>
      <Styled.p>
        A clickable card, but you <em>can</em> select the text.
      </Styled.p>
      <Styled.ul sx={ulStyles}>
        {posts.map(({ title, description, tags }) => (
          <ClickableCardAlt
            key={title}
            title={title}
            url="/cards/#"
            tags={tags}
            text={description}
            image={cat}
            sx={cardStyles}
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
