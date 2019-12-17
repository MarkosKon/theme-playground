/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const Column = ({ className, xs, sm, md, lg, xl, children }) => (
  <div
    className={className}
    sx={{
      flex: `0 0 ${xs}`,
      "@media screen and (min-width: 576px)": { flex: sm ? `0 0 ${sm}` : 1 },
      "@media screen and (min-width: 768px)": { flex: md ? `0 0 ${md}` : null },
      "@media screen and (min-width: 992px)": { flex: lg ? `0 0 ${lg}` : null },
      "@media screen and (min-width: 1200px)": { flex: xl ? `0 0 ${xl}` : null }
    }}
  >
    {children}
  </div>
);

Column.propTypes = {
  className: PropTypes.string,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.func
  ])
};

Column.defaultProps = {
  className: null,
  xs: "100%",
  sm: null,
  md: null,
  lg: null,
  xl: null,
  children: null
};

export default Column;
