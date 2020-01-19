import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Event from "../components/Event";

const EventTemplate = ({ data: { event } }) => {
  return (
    <Layout>
      <Event {...event} />
    </Layout>
  );
};

EventTemplate.propTypes = {
  data: PropTypes.shape({
    event: PropTypes.object.isRequired
  }).isRequired
};

export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM D, YYYY")
      endDate(formatString: "MMMM D, YYYY")
      location
      slug
    }
  }
`;

export default EventTemplate;
