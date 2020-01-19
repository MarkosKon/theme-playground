/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Layout from "@affectionatedoor/gatsby-theme-quicker-start/src/components/Layout";

const IndexPage = ({ data: { astronaut } }) => {
  return (
    <Layout>
      <Styled.h1>Orbs, stars, and twilights</Styled.h1>
      <Styled.p sx={{ fontStyle: "italic", fontSize: 4 }}>
        A peep at some distant orb has power to raise and purify our thoughts
        like a strain of sacred music, or a noble picture, or a passage from the
        grander poets. It always does 1 good.
      </Styled.p>
      <Styled.p>
        Apparently we had reached a great height in the atmosphere, for the{" "}
        <abbr>sky</abbr> was a <em>dead black,</em> and the stars had ceased to
        twinkle. By the same illusion which lifts the horizon of the sea to the
        level of the spectator on a hillside, the sable cloud beneath was dished
        out, and the car seemed to float in the middle of an immense dark
        sphere, whose upper half was <em>strewn with silver.</em>
      </Styled.p>
      <Styled.h2>Velocity</Styled.h2>
      <Styled.p>
        As I went on, still gaining velocity, the palpitation of night and day
        merged into one continuous greyness; the sky took on a wonderful
        deepness of blue, a splendid luminous color like that of early twilight;
        the jerking sun became a streak of fire, a brilliant arch, in space; the
        moon a fainter fluctuating band; and I could see nothing of the stars,
        save now and then a brighter circle flickering in the blue.
      </Styled.p>
      <Img
        title="space"
        fluid={astronaut.childImageSharp.fluid}
        sx={{ mb: 4 }}
      />
      <Styled.ul>
        <Styled.li>
          I shall see the face of Mars, anyhow, and that will be a rare
          experience.
        </Styled.li>
        <Styled.li>
          It seems to me that a view of the heavenly bodies through a fine
          telescope,
        </Styled.li>
        <Styled.li>
          as well as a tour round the world, should form a part of a liberal
          education.
        </Styled.li>
      </Styled.ul>
      <Styled.pre>
        <Styled.code>
          {`
import React from "react";

const Component = () => (
  <div>Hello World!!</div>
);

export default Component;
        `}
        </Styled.code>
      </Styled.pre>
      <Styled.h3>H ευημερία του Ριντάουτ</Styled.h3>
      <Styled.p>
        Ήταν ένα υπέροχο ταξίδι και μέσω αυτού γνώρισα και αγάπησα πολλούς που
        δεν θα ξαναδώ ποτέ. Γιατί η ζωή δεν είναι απέραντη και ο καθένας πρέπει
        να εκπληρώσει το χρέος του για την ασφάλεια και την ευημερία του
        Ριντάουτ.
      </Styled.p>
      <Styled.blockquote>
        Παρόλα αυτά, ταξιδεύαμε πολύ, πάντα. Αλλά υπήρχαν τόσα εκατομμύρια και
        τόσο λίγα χρόνια.
      </Styled.blockquote>
      <Styled.ol>
        <Styled.li>
          I shall see the face of Mars, anyhow, and that will be a rare
          experience.
        </Styled.li>
        <Styled.li>
          It seems to me that a view of the heavenly bodies through a fine
          telescope,
        </Styled.li>
        <Styled.li>
          as well as a tour round the world, should form a part of a liberal
          education.
        </Styled.li>
      </Styled.ol>
      <div sx={{ width: "100%", overflowX: "auto", gridColumn: "1/4" }}>
        <Styled.table>
          <caption>
            Data about the planets of our solar system (Planetary facts taken
            from{" "}
            <Styled.a href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/">
              Nasa&apos;s Planetary Fact Sheet - Metric
            </Styled.a>
            ).
          </caption>
          <colgroup>
            <col span="2" />
            <col sx={{ variant: "borders.primary" }} />
          </colgroup>
          <thead>
            <Styled.tr>
              <Styled.td colSpan="2" sx={{ bg: "muted" }}></Styled.td>
              <Styled.th scope="col">Name</Styled.th>
              <Styled.th scope="col">
                Mass (10<sup>24</sup>kg)
              </Styled.th>
              <Styled.th scope="col">Diameter (km)</Styled.th>
              <Styled.th scope="col">
                Density (kg/m<sup>3</sup>)
              </Styled.th>
              <Styled.th scope="col">
                Gravity (m/s<sup>2</sup>)
              </Styled.th>
              <Styled.th scope="col">Length of day (hours)</Styled.th>
              <Styled.th scope="col">
                Distance from Sun (10<sup>6</sup>km)
              </Styled.th>
              <Styled.th scope="col">Mean temperature (°C)</Styled.th>
              <Styled.th scope="col">Number of moons</Styled.th>
              <Styled.th scope="col">Notes</Styled.th>
            </Styled.tr>
          </thead>
          <tbody>
            <Styled.tr>
              <Styled.th rowSpan="4" colSpan="2" scope="rowgroup">
                Terrestrial planets
              </Styled.th>
              <Styled.th scope="row">Mercury</Styled.th>
              <Styled.td>0.330</Styled.td>
              <Styled.td>4,879</Styled.td>
              <Styled.td>5427</Styled.td>
              <Styled.td>3.7</Styled.td>
              <Styled.td>4222.6</Styled.td>
              <Styled.td>57.9</Styled.td>
              <Styled.td>167</Styled.td>
              <Styled.td>0</Styled.td>
              <Styled.td>Closest to the Sun</Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.th scope="row">Venus</Styled.th>
              <Styled.td>4.87</Styled.td>
              <Styled.td>12,104</Styled.td>
              <Styled.td>5243</Styled.td>
              <Styled.td>8.9</Styled.td>
              <Styled.td>2802.0</Styled.td>
              <Styled.td>108.2</Styled.td>
              <Styled.td>464</Styled.td>
              <Styled.td>0</Styled.td>
              <Styled.td></Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.th scope="row">Earth</Styled.th>
              <Styled.td>5.97</Styled.td>
              <Styled.td>12,756</Styled.td>
              <Styled.td>5514</Styled.td>
              <Styled.td>9.8</Styled.td>
              <Styled.td>24.0</Styled.td>
              <Styled.td>149.6</Styled.td>
              <Styled.td>15</Styled.td>
              <Styled.td>1</Styled.td>
              <Styled.td>Our world</Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.th scope="row">Mars</Styled.th>
              <Styled.td>0.642</Styled.td>
              <Styled.td>6,792</Styled.td>
              <Styled.td>3933</Styled.td>
              <Styled.td>3.7</Styled.td>
              <Styled.td>24.7</Styled.td>
              <Styled.td>227.9</Styled.td>
              <Styled.td>-65</Styled.td>
              <Styled.td>2</Styled.td>
              <Styled.td>The red planet</Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.th rowSpan="4" scope="rowgroup">
                Jovian planets
              </Styled.th>
              <Styled.th rowSpan="2" scope="rowgroup">
                Gas giants
              </Styled.th>
              <Styled.th scope="row">Jupiter</Styled.th>
              <Styled.td>1898</Styled.td>
              <Styled.td>142,984</Styled.td>
              <Styled.td>1326</Styled.td>
              <Styled.td>23.1</Styled.td>
              <Styled.td>9.9</Styled.td>
              <Styled.td>778.6</Styled.td>
              <Styled.td>-110</Styled.td>
              <Styled.td>67</Styled.td>
              <Styled.td>The largest planet</Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.th scope="row">Saturn</Styled.th>
              <Styled.td>568</Styled.td>
              <Styled.td>120,536</Styled.td>
              <Styled.td>687</Styled.td>
              <Styled.td>9.0</Styled.td>
              <Styled.td>10.7</Styled.td>
              <Styled.td>1433.5</Styled.td>
              <Styled.td>-140</Styled.td>
              <Styled.td>62</Styled.td>
              <Styled.td></Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.th rowSpan="2" scope="rowgroup">
                Ice giants
              </Styled.th>
              <Styled.th scope="row">Uranus</Styled.th>
              <Styled.td>86.8</Styled.td>
              <Styled.td>51,118</Styled.td>
              <Styled.td>1271</Styled.td>
              <Styled.td>8.7</Styled.td>
              <Styled.td>17.2</Styled.td>
              <Styled.td>2872.5</Styled.td>
              <Styled.td>-195</Styled.td>
              <Styled.td>27</Styled.td>
              <Styled.td></Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.th scope="row">Neptune</Styled.th>
              <Styled.td>102</Styled.td>
              <Styled.td>49,528</Styled.td>
              <Styled.td>1638</Styled.td>
              <Styled.td>11.0</Styled.td>
              <Styled.td>16.1</Styled.td>
              <Styled.td>4495.1</Styled.td>
              <Styled.td>-200</Styled.td>
              <Styled.td>14</Styled.td>
              <Styled.td></Styled.td>
            </Styled.tr>
            <Styled.tr>
              <Styled.th colSpan="2" scope="rowgroup">
                Dwarf planets
              </Styled.th>
              <Styled.th scope="row">Pluto</Styled.th>
              <Styled.td>0.0146</Styled.td>
              <Styled.td>2,370</Styled.td>
              <Styled.td>2095</Styled.td>
              <Styled.td>0.7</Styled.td>
              <Styled.td>153.3</Styled.td>
              <Styled.td>5906.4</Styled.td>
              <Styled.td>-225</Styled.td>
              <Styled.td>5</Styled.td>
              <Styled.td>
                Declassified as a planet in 2006, but this{" "}
                <Styled.a href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/">
                  remains controversial
                </Styled.a>
                .
              </Styled.td>
            </Styled.tr>
          </tbody>
        </Styled.table>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    astronaut: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object
      })
    })
  }).isRequired
};

export const query = graphql`
  query {
    astronaut: file(relativePath: { regex: "/space/i" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
