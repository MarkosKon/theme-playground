import React from "react";
import { Link } from "gatsby";

export default () => (
  <main>
    <h1>Orbs, stars, and twilights</h1>
    <ul>
      <li>
        <Link to="/english-tech-post/">English tech post</Link>
      </li>
      <li>
        <Link to="/greek-tech-post/">Greek tech post</Link>
      </li>
      <li>
        <Link to="/greek-polytonic-text/">Greek polytonic text</Link>
      </li>
      <li>
        <Link to="/phonetic-example/">Phonetic text</Link>
      </li>
      <li>
        <Link to="/variable-fonts/">Variable fonts</Link>
      </li>
    </ul>
    <p className="intro">
      A peep at some distant orb has power to raise and purify our thoughts like
      a strain of sacred music, or a noble picture, or a passage from the
      grander poets. It always does 1 good.
    </p>
    <p>
      Apparently we had reached a great height in the atmosphere (
      <span className="fraction">1/2</span> ), for the{" "}
      <span className="small-caps">sky</span> was a dead black, and the stars
      had ceased to twinkle. By the same illusion which lifts the horizon
      <sup>1</sup>
      of the sea to the level of the spectator on a hillside, the sable cloud
      beneath was dished out, and the car seemed to float in the middle
      <sub>2</sub>
      of an immense dark sphere, whose upper half was strewn with silver. The
      efficient office for ligature testing.
    </p>
    <h2>Velocity</h2>
    <p>
      As I went on, still gaining velocity, the palpitation of night and day
      merged into one continuous greyness; the sky took on a wonderful deepness
      of blue, a splendid luminous color like that of early twilight; the
      jerking sun became a streak of fire, a brilliant arch, in space; the moon
      a fainter fluctuating band; and I could see nothing of the stars, save now
      and then a brighter circle flickering in the blue.
    </p>
    <ul>
      <li>
        I shall see the face of Mars, anyhow, and that will be a rare
        experience.
      </li>
      <li>
        {" "}
        It seems to me that a view of the heavenly bodies through a fine
        telescope,
      </li>
      <li>
        as well as a tour round the world, should form a part of a liberal
        education.
      </li>
    </ul>
    <h3>H ευημερία του Ριντάουτ</h3>
    <p>
      {" "}
      Ήταν ένα υπέροχο ταξίδι και μέσω αυτού γνώρισα και αγάπησα πολλούς που δεν
      θα ξαναδώ ποτέ. Γιατί η ζωή δεν είναι απέραντη και ο καθένας πρέπει να
      εκπληρώσει το χρέος του για την ασφάλεια και την ευημερία του Ριντάουτ.
    </p>
    <blockquote>
      Παρόλα αυτά, ταξιδεύαμε πολύ, πάντα. Αλλά υπήρχαν τόσα εκατομμύρια και
      τόσο λίγα χρόνια.
    </blockquote>
    <ol>
      <li>
        I shall see the face of Mars, anyhow, and that will be a rare
        experience.
      </li>
      <li>
        It seems to me that a view of the heavenly bodies through a fine
        telescope,
      </li>
      <li>
        as well as a tour round the world, should form a part of a liberal
        education.
      </li>
    </ol>
    <h2>Tabular data</h2>
    <div id="table-wrapper">
      <table>
        <caption>
          Data about the planets of our solar system (Planetary facts taken from
          <a href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/">
            {" "}
            Nasa&apos;s Planetary Fact Sheet - Metric
          </a>
          ).
        </caption>
        <colgroup>
          <col span="2" />
          <col style={{ border: "2px solid black" }} />
        </colgroup>
        <thead>
          <tr>
            <td colSpan="2" />
            <th scope="col">Name</th>
            <th scope="col">
              Mass (10<sup>24</sup>kg)
            </th>
            <th scope="col">Diameter (km)</th>
            <th scope="col">
              Density (kg/m<sup>3</sup>)
            </th>
            <th scope="col">
              Gravity (m/s<sup>2</sup>)
            </th>
            <th scope="col">Length of day (hours)</th>
            <th scope="col">
              Distance from Sun (10<sup>6</sup>km)
            </th>
            <th scope="col">Mean temperature (°C)</th>
            <th scope="col">Number of moons</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="4" colSpan="2" scope="rowgroup">
              Terrestrial planets
            </th>
            <th scope="row">Mercury</th>
            <td>0.330</td>
            <td>4,879</td>
            <td>5427</td>
            <td>3.7</td>
            <td>4222.6</td>
            <td>57.9</td>
            <td>167</td>
            <td>0</td>
            <td>Closest to the Sun</td>
          </tr>
          <tr>
            <th scope="row">Venus</th>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
            <td>8.9</td>
            <td>2802.0</td>
            <td>108.2</td>
            <td>464</td>
            <td>0</td>
            <td />
          </tr>
          <tr>
            <th scope="row">Earth</th>
            <td>5.97</td>
            <td>12,756</td>
            <td>5514</td>
            <td>9.8</td>
            <td>24.0</td>
            <td>149.6</td>
            <td>15</td>
            <td>1</td>
            <td>Our world</td>
          </tr>
          <tr>
            <th scope="row">Mars</th>
            <td>0.642</td>
            <td>6,792</td>
            <td>3933</td>
            <td>3.7</td>
            <td>24.7</td>
            <td>227.9</td>
            <td>-65</td>
            <td>2</td>
            <td>The red planet</td>
          </tr>
          <tr>
            <th rowSpan="4" scope="rowgroup">
              Jovian planets
            </th>
            <th rowSpan="2" scope="rowgroup">
              Gas giants
            </th>
            <th scope="row">Jupiter</th>
            <td>1898</td>
            <td>142,984</td>
            <td>1326</td>
            <td>23.1</td>
            <td>9.9</td>
            <td>778.6</td>
            <td>-110</td>
            <td>67</td>
            <td>The largest planet</td>
          </tr>
          <tr>
            <th scope="row">Saturn</th>
            <td>568</td>
            <td>120,536</td>
            <td>687</td>
            <td>9.0</td>
            <td>10.7</td>
            <td>1433.5</td>
            <td>-140</td>
            <td>62</td>
            <td />
          </tr>
          <tr>
            <th rowSpan="2" scope="rowgroup">
              Ice giants
            </th>
            <th scope="row">Uranus</th>
            <td>86.8</td>
            <td>51,118</td>
            <td>1271</td>
            <td>8.7</td>
            <td>17.2</td>
            <td>2872.5</td>
            <td>-195</td>
            <td>27</td>
            <td />
          </tr>
          <tr>
            <th scope="row">Neptune</th>
            <td>102</td>
            <td>49,528</td>
            <td>1638</td>
            <td>11.0</td>
            <td>16.1</td>
            <td>4495.1</td>
            <td>-200</td>
            <td>14</td>
            <td />
          </tr>
          <tr>
            <th colSpan="2" scope="rowgroup">
              Dwarf planets
            </th>
            <th scope="row">Pluto</th>
            <td>0.0146</td>
            <td>2,370</td>
            <td>2095</td>
            <td>0.7</td>
            <td>153.3</td>
            <td>5906.4</td>
            <td>-225</td>
            <td>5</td>
            <td>
              Declassified as a planet in 2006, but this
              <a href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/">
                {" "}
                remains controversial
              </a>
              .
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
);
