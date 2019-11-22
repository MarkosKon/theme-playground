/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ siteTitle }) => (
  <Flex
    as="header"
    sx={{
      alignItems: "center",
      backgroundColor: "primary",
      color: "background",
      py: 3,
      px: 4
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
    <ThemeSwitcher sx={{ ml: "auto" }} />
  </Flex>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
