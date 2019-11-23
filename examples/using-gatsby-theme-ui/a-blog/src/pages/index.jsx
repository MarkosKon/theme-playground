/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql } from "gatsby";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";
import Link from "@affectionatedoor/gatsby-theme-ui/src/components/Link";
import SEO from "@affectionatedoor/gatsby-theme-ui/src/components/SEO";

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes.map(post => post.frontmatter);
  return (
    <Layout>
      <SEO title="Home" />
      <Styled.h1 sx={{ fontSize: 4, mt: 5, mb: 4, textAlign: "center" }}>
        All posts
      </Styled.h1>
      <Styled.ul sx={{ listStyle: "none", pl: 0 }}>
        {posts.map(post => (
          <Styled.li key={post.title}>
            <Link to={post.url}>
              <Styled.h2 sx={{ my: 2 }}>{post.title}</Styled.h2>
            </Link>
            <Styled.p sx={{ fontStyle: "italic", fontSize: "14px" }}>
              {post.date}
            </Styled.p>
            <Styled.p>{post.description}</Styled.p>
          </Styled.li>
        ))}
      </Styled.ul>
      <Link to="/mdx/">An non-blog MDX page.</Link>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
          }).isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired
};

export const query = graphql`
  query IndexQuery {
    allMdx(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          description
          url
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;

export default IndexPage;
