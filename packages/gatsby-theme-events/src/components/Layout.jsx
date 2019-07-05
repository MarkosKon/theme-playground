import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => (
  <div>
    <h2 style={{ fontSize: "2em" }}>Gatsby Events Theme </h2>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
