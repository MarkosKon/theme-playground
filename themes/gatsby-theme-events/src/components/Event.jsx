// maybe is wrong.
import React from "react";
import PropTypes from "prop-types";

const getDate = (date, { day = true, month = true, year = true } = {}) =>
  date.toLocaleString("en-US", {
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined
  });

const EventDate = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const isOneDay = start.toDateString() === end.toDateString();

  return (
    <>
      <time dateTime={start.toISOString()}>
        {getDate(start, { year: isOneDay })}
      </time>
      {!isOneDay && (
        <>
          -
          <time dateTime={end.toISOString()}>
            {getDate(end, { month: start.getMonth() !== end.getMonth() })}
          </time>
        </>
      )}
    </>
  );
};

EventDate.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired
};

const EventList = ({ name, url, startDate, endDate, location }) => (
  <div>
    <h2>{`${name} (${location})`}</h2>
    <div>
      <EventDate startDate={startDate} endDate={endDate} />
    </div>
    <br />
    <div>
      {/* eslint-disable-next-line */}
      Website: <a href={url}>{url}</a>
    </div>
  </div>
);

EventList.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};
export default EventList;
