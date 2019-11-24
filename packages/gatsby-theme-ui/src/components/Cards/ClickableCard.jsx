// This is an accessible card implemented from https://inclusive-components.design/cards/
// The whole card is clickable and it also has links inside it.
// I made some improvements with the hover/focus styles—see the comments.
/** @jsx jsx */
import PropTypes from "prop-types";
import { useState } from "react";
import { Styled, jsx, Box } from "theme-ui";

import Link from "../Link";

const ClickableCard = ({ title, text, image, url, tags, gap, className }) => {
  const [containerBoxShadow, setContainerBoxShadow] = useState(true);
  return (
    <Styled.li
      className={className}
      sx={{
        position: "relative",
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
        m: `${gap / 2}px`,
        // I use the before selector here because I
        // want to "animate the box-shadow" smoothly
        // when we go quickly from tag button --> to
        // container --> to tag again. In reality,
        // we're not animating the box-shadow but the
        // opacity of the :before element—see the link below:
        // https://tobiasahlin.com/blog/how-to-animate-box-shadow/
        "&:before": {
          content: `" "`,
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          opacity: 0,
          borderRadius: "4px",
          boxShadow: theme => `0px 0px 0px 2px ${theme.colors.accent}`,
          transition: "opacity .15s ease-in-out"
        },
        "&:hover:before": containerBoxShadow && {
          opacity: 1
        },
        "&:focus-within:before": containerBoxShadow && {
          opacity: 1
        },
        "&:focus-within h2 a:focus": {
          textDecoration: "none",
          color: "primary",
          boxShadow: "none"
        }
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
          <Link
            to={url}
            sx={{
              textDecoration: "none",
              "&:hover": {
                color: "primary"
              },
              "&:after": {
                content: `""`,
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              }
            }}
          >
            {title}
          </Link>
        </Styled.h2>
        <Styled.p>{text}</Styled.p>
        {tags && (
          <div>
            {tags.map(tag => (
              <Link
                key={tag}
                to={`/tags/${tag}/`}
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    color: "primary",
                    boxShadow: theme => `0px 0px 0px 2px ${theme.colors.accent}`
                  },
                  mr: 2,
                  mb: 2,
                  borderRadius: "4px",
                  fontSize: 2,
                  bg: "muted",
                  py: 3,
                  px: 4,
                  position: "relative",
                  textTransform: "capitalize"
                }}
                // I remove the box shadow when the link inside
                // the card is hovered or focused.
                onFocus={() => setContainerBoxShadow(false)}
                onBlur={() => setContainerBoxShadow(true)}
                onMouseEnter={() => setContainerBoxShadow(false)}
                onMouseLeave={() => setContainerBoxShadow(true)}
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
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
            borderRadius: 0,
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px"
          }}
        />
      </div>
    </Styled.li>
  );
};

ClickableCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  gap: PropTypes.number
};

ClickableCard.defaultProps = {
  className: null,
  gap: 16
};

export default ClickableCard;
