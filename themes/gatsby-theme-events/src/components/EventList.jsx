import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const EventList = ({ events }) => (
  <>
    <h1>Upcoming events</h1>
    <ul>
      {events.map(({ id, slug, name, startDate, location }) => (
        <li key={id}>
          <strong>
            <Link to={slug}>{name}</Link>
          </strong>
          <br />
          {new Date(startDate).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
          {` in ${location}`}
        </li>
      ))}
    </ul>
  </>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};
export default EventList;
