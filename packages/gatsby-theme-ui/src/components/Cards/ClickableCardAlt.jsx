// This is an accessible card implemented from https://inclusive-components.design/cards/
// The whole card is clickable and has links inside it.
// It's the "redundant click handler" solution from the post above.
// I made some improvements with the hover/focus styles—see the comments.
/** @jsx jsx */
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { Styled, jsx, Box } from "theme-ui";

import Link from "../Link";

let lastMouseDown = 0;
let lastMouseUp = 0;

const ClickableCardAlt = ({
  title,
  text,
  image,
  url,
  tags,
  gap,
  className
}) => {
  const [containerBoxShadow, setContainerBoxShadow] = useState(true);
  const linkRef = useRef();

  // When the component mounts, we add some styles.
  // The styles have to do with the
  // box-shadow of the container onHover/onFocus.
  // We do that because we want to make
  // sure JavaScript is enabled. If not, the
  // the styles would be deceptive.
  // This solution (double render) has considerable
  // performance implications (140ms task), but, as
  // far as I am aware, you can't set styles for
  // pseudo elements (before, in this case) with
  // JavaScript.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Styled.li
      className={className}
      sx={{
        cursor: mounted && "pointer",
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
        "&:before": mounted && {
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
        "&:hover:before": mounted &&
          containerBoxShadow && {
            opacity: 1
          },
        "&:focus-within:before": mounted &&
          containerBoxShadow && {
            opacity: 1
          },
        "&:focus-within h2 a:focus": mounted && {
          textDecoration: "none",
          color: "primary",
          boxShadow: "none"
        }
      }}
      onClick={e => {
        const delay = lastMouseUp - lastMouseDown;
        if (
          // A hacky way to check if the user
          // is trying to select text. I use the
          // word hacky because you can select text with
          // many ways, for example, by double clicking, and
          // this implementation doesn't cover that. Check the
          // post at the top for more.
          delay < 200 &&
          // avoid double clicking (event bubbling) if the user
          // clicks the heading link directly.
          e.target !== linkRef.current &&
          // Don't forget to add the links contained
          // by the card in this check.
          !e.target.classList.contains("card-tag")
        ) {
          linkRef.current.click();
        }
      }}
      onMouseUp={({ timeStamp }) => {
        lastMouseUp = timeStamp;
      }}
      onMouseDown={({ timeStamp }) => {
        lastMouseDown = timeStamp;
      }}
    >
      <Box
        sx={{
          position: "relative",
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
            ref={linkRef}
            sx={
              mounted && {
                textDecoration: "none",
                "&:hover": {
                  color: "primary"
                }
              }
            }
          >
            {title}
          </Link>
        </Styled.h2>
        <Styled.p>{text}</Styled.p>
        {tags && (
          <div>
            {tags.map(tag => (
              <Link
                // className is required; see the container's
                // onClick method.
                className="card-tag"
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
                // I remove the container's box shadow when the
                // link inside the card is hovered or focused.
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
          // assuming the image is decorative.
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

ClickableCardAlt.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  gap: PropTypes.number
};

ClickableCardAlt.defaultProps = {
  className: null,
  gap: 16
};

export default ClickableCardAlt;
