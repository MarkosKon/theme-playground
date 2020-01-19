/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link } from "gatsby";
import ThemeSwitcher from "@affectionatedoor/gatsby-theme-quick-start/src/components/ThemeSwitcher";

const Header = () => (
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
      Quick start
    </Link>
    <ThemeSwitcher sx={{ ml: "auto" }} />
  </Flex>
);

export default Header;
