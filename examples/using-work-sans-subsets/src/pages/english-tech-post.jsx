import React from "react";

export default () => (
  <main>
    <h1 className="swash" style={{ marginBottom: "calc(var(--rhythm) * 2)" }}>
      Reveal animations on scroll with react-spring
    </h1>
    <p>This page downloads the following fonts:</p>
    <ul>
      <li>
        <strong>Body text:</strong> WorkSans-Regular-latin.woff2 -
        <span className="small-caps">30.8KB</span>
      </li>
      <li>
        <strong>Body text:</strong> WorkSans-Regular-rest.woff2 -
        <span className="small-caps">12.7KB</span>
      </li>
      <li>
        <strong>Body text:</strong> WorkSans-Italic-latin.woff2 -
        <span className="small-caps">29.7KB</span>
      </li>
      <li>
        <strong>Heading + Body text:</strong> WorkSans-Bold-latin.woff2 -
        <span className="small-caps">32.9KB</span>
      </li>
    </ul>
    <p>
      The total size is <span className="small-caps">106.1KB</span>
    </p>
    <h2>Introduction</h2>
    <p>
      In this post, you’ll use the{" "}
      <a href="https://github.com/react-spring/react-spring">react-spring</a>{" "}
      library to create reveal animations on scroll. I’m talking about simple
      animations like <em>fade-ins</em> and <em>slide-ups</em>. To determine if
      an element is visible, you’ll use the{" "}
      <a href="https://github.com/joshwnj/react-visibility-sensor">
        react-visibility-sensor
      </a>
      . I will also mention some smaller libraries you can use that specialize
      in reveal animations—instead of <code>react-spring</code>—and I will show
      a solution with <code>react-visibility-sensor</code> and <abbr>CSS</abbr>{" "}
      transitions.
    </p>
    <h2>Project Setup</h2>
    <p>
      Check this{" "}
      <a href="https://github.com/MarkosKon/react-spring-scroll">GitHub repo</a>{" "}
      that has the code for the completed example. The first thing you have to
      do is to create a new project with Create React App (<abbr>CRA</abbr>):
    </p>
    <pre>
      <code>
        npx create-react-app react-spring-scroll cd react-spring-scroll
      </code>
    </pre>
    <p>Then, install the dependencies, and start the development server:</p>
    <pre>
      <code>yarn add react-spring react-visibility-sensor yarn start</code>
    </pre>
    <p>
      After that, go to the <code>src/App.js</code> file, and add the following
      code. Pay attention to the highlighted lines:
    </p>
    <pre>
      <code>
        {`// App.js
import React from "react";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

// styles
const centeredStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%"
};
const h2Styles = {
    fontSize: "82px"
};

const App = () => {
    return (
    <div>
        <div
        style={{
            ...centeredStyles,
            height: "100vh",
            backgroundColor: "pink"
        }}
        >
        <VisibilitySensor>
            {({ isVisible }) => (
            <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => <h2 style={{ ...h2Styles, opacity }}>Hello</h2>}
            </Spring>
            )}
        </VisibilitySensor>
        </div>
    <<div>
    );
};

export default App;"`}
      </code>
    </pre>
    <h3>Code explanation</h3>
    <p>
      In the code above, we use two components. The <code>Spring</code> and the{" "}
      <code>VisibilitySensor</code>. They are both <em>render prop</em>{" "}
      components—meaning that they expose their functionality through function
      parameters. For example, the <code>VisibilitySensor</code> does this
      through the <code>isVisible</code>, and the <code>Spring</code> through
      the opacity.
    </p>
  </main>
);
