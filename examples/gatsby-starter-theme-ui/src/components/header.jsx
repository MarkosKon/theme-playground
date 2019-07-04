/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => (
  <header
    sx={{
      backgroundColor: "primary",
      color: "background"
    }}
  >
    <Box
      sx={{
        m: "0 auto",
        p: "1.45rem 1.0875rem",
        maxWidth: "960px"
      }}
    >
      <Link
        to="/"
        sx={{
          fontFamily: "heading",
          fontWeight: "heading",
          fontSize: 40,
          color: "background",
          textDecoration: "none"
        }}
      >
        {siteTitle}
      </Link>
    </Box>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
