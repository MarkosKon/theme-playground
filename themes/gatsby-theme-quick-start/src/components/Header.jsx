/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ siteTitle = "A Blog" }) => (
  <Flex
    as="header"
    sx={{
      alignItems: "center",
      backgroundColor: "muted",
      color: "primary",
      py: 3,
      px: 4
    }}
  >
    <Link
      to="/"
      sx={{
        variant: "links.ui",
        fontFamily: "heading",
        fontWeight: 700,
        fontSize: 5,
        color: "inherit"
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
