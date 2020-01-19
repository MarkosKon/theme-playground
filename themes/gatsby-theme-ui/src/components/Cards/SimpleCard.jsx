/** @jsx jsx */
import PropTypes from "prop-types";
import { Styled, jsx, Box } from "theme-ui";

import Link from "../Link";

const SimpleCard = ({ title, text, image, url, gap, className }) => (
  <Styled.li
    className={className}
    sx={{
      display: "flex",
      flexDirection: "column",
      borderRadius: "4px",
      boxShadow:
        "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);",
      width: [
        `calc(100% - ${gap}px)`,
        `calc(50% - ${gap}px)`,
        `calc(33% - ${gap}px)`
      ],
      m: `${gap / 2}px`
    }}
  >
    <Box
      sx={{
        p: 3,
        pt: 0,
        order: 1,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        "& > :last-child": {
          mt: "auto"
        }
      }}
    >
      <Styled.h2 sx={{ my: 3 }}>
        <Link to={url} sx={{ p: 1 }}>
          {title}
        </Link>
      </Styled.h2>
      <Styled.p sx={{ mb: 0 }}>{text}</Styled.p>
    </Box>
    <div
      sx={{
        height: "250px",
        "& img": { objectFit: "cover", height: "100%", width: "100%" }
      }}
    >
      <Styled.img
        src={image}
        alt=""
        sx={{
          maxHeight: "256px",
          borderRadius: 0
        }}
      />
    </div>
  </Styled.li>
);

SimpleCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  gap: PropTypes.number
};

SimpleCard.defaultProps = {
  className: null,
  gap: 16
};

export default SimpleCard;
