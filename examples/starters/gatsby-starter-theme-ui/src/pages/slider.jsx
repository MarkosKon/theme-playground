/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui";
import Slider from "react-slick";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Centered from "../components/Centered";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SliderPage = () => (
  <Layout>
    <SEO title="Slider page" />
    <Styled.h1>Slider with react-slick</Styled.h1>

    <Slider {...sliderSettings}>
      <Box>
        <Centered sx={{ minHeight: "500px", bg: "secondary" }}>
          <Styled.h2>Slide #1</Styled.h2>
          <p sx={{ fontSize: 4, lineHeight: 1.7, m: 0 }}>
            Lorem, ipsum dolor sit amet consectetur.
          </p>
          <p sx={{ fontSize: 3 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            culpa?
          </p>
        </Centered>
      </Box>
      <Box>
        <Centered sx={{ minHeight: "500px", bg: "primary", color: "white" }}>
          <Styled.h2>Slide #2</Styled.h2>
          <p sx={{ fontSize: 4, lineHeight: 1.7, m: 0 }}>
            Lorem, ipsum dolor sit amet consectetur.
          </p>
          <p sx={{ fontSize: 3 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            culpa?
          </p>
        </Centered>
      </Box>
      <Box>
        <Centered sx={{ minHeight: "500px", bg: "accent", color: "white" }}>
          <Styled.h2>Slide #3</Styled.h2>
          <p sx={{ fontSize: 4, lineHeight: 1.7, m: 0 }}>
            Lorem, ipsum dolor sit amet consectetur.
          </p>
          <p sx={{ fontSize: 3 }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            culpa?
          </p>
        </Centered>
      </Box>
    </Slider>
  </Layout>
);

export default SliderPage;
