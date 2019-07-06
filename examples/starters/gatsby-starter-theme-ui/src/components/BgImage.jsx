/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const BgImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  overlayColor,
  children,
  className,
  ...restProps
}) => (
  <div sx={{ position: "relative", bg: overlayColor }}>
    <Img
      fluid={fluid}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: [mobileHeight, height],
        zIndex: -1,
        "& > img": {
          objectFit: "cover !important;",
          objectPosition: "0% 0% !important;",
          fontFamily:
            "object-fit: cover !important; object-position: 0% 0% !important;"
        }
      }}
    />
    <div
      className={className}
      sx={{ position: "absolute", top: "0", height: "100%", width: "100%" }}
      {...restProps}
    >
      {children}
    </div>
  </div>
);

BgImage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fluid: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};
BgImage.defaultProps = {
  height: null,
  mobileHeight: null,
  overlayColor: "transparent",
  children: null,
  className: null
};

export default BgImage;
