/** @jsx jsx */
import { jsx, Styled, Flex, Box } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlus,
  faLinkedin,
  faSkype,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IconsPage = () => (
  <Layout>
    <SEO title="Icons" />
    <Styled.h1>FontAwesome Icons</Styled.h1>
    <Flex sx={{ flexWrap: "wrap", fontSize: 8 }}>
      <Box sx={{ p: 3 }}>
        <FontAwesomeIcon icon={faFacebookF} />
      </Box>
      <Box sx={{ p: 3 }}>
        <FontAwesomeIcon icon={faGooglePlus} />
      </Box>
      <Box sx={{ p: 3 }}>
        <FontAwesomeIcon icon={faLinkedin} />
      </Box>
      <Box sx={{ p: 3 }}>
        <FontAwesomeIcon icon={faSkype} />
      </Box>
      <Box sx={{ p: 3, color: "#00b7ff" }}>
        <FontAwesomeIcon icon={faTwitter} />
      </Box>
      <Box sx={{ p: 3 }}>
        <FontAwesomeIcon icon={faInstagram} />
      </Box>
    </Flex>
  </Layout>
);

export default IconsPage;
