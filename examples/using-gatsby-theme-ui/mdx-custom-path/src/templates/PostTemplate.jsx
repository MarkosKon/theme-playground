/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx, Box } from "theme-ui";
import { graphql } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import Layout from "@affectionatedoor/gatsby-theme-ui/src/components/Layout";

const PostTemplate = ({
  data: {
    mdx: {
      code: { body }
    }
  }
}) => {
  return (
    <Layout>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <MDXRenderer>{body}</MDXRenderer>
      </Box>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      code: PropTypes.shape({
        body: PropTypes.string.isRequired
      })
    })
  }).isRequired
};

export const postTemplateQuey = graphql`
  query PostTemplateQuey($id: String) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`;

export default PostTemplate;
