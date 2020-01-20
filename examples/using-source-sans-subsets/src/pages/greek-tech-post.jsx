import React from "react";

export default () => (
  <main>
    <h1 style={{ marginBottom: "calc(var(--rhythm) * 2)" }}>
      Reveal animations στο scroll με react-spring
    </h1>
    <p>This page downloads the following fonts:</p>
    <ul>
      {/* <li>
        <strong>Headings:</strong> SourceCodePro-Bold-latin.woff2 -
        <span className="small-caps">16.9KB</span>
      </li> */}
      {/* <li>
        <strong>Headings:</strong> SourceCodePro-Bold-greek.woff2 -
        <span className="small-caps">7.3KB</span>
      </li> */}
      {/* <li>
        <strong>Code blocks:</strong> SourceCodePro-Regular-latin.woff2 -
        <span className="small-caps">17KB</span>
      </li> */}
      <li>
        <strong>Heading + Body text:</strong> SourceSansPro-Bold-latin.woff2 -
        <span className="small-caps">21.2KB</span>
      </li>
      <li>
        <strong>Heading + Body text:</strong> SourceSansPro-Bold-greek.woff2 -
        <span className="small-caps">9KB</span>
      </li>
      <li>
        <strong>Body text:</strong> SourceSansPro-Regular-latin.woff2 -
        <span className="small-caps">21.3KB</span>
      </li>
      <li>
        <strong>Body text:</strong> SourceSansPro-Regular-greek.woff2 -
        <span className="small-caps">9.1KB</span>
      </li>
      <li>
        <strong>Body text:</strong> SourceSansPro-It-latin.woff2 -
        <span className="small-caps">17.4KB</span>
      </li>
      <li>
        <strong>Body text:</strong> SourceSansPro-It-greek.woff2 -
        <span className="small-caps">7.6KB</span>
      </li>
    </ul>
    <p>
      The total size is <span className="small-caps">85.6KB</span>
    </p>
    <h2>Εισαγωγή</h2>
    <p>
      Σε αυτό το post, θα χρησιμοποιήσoυμε την βιβλιοθήκη{" "}
      <a href="https://github.com/react-spring/react-spring">react-spring</a>{" "}
      για να δημιουργήσουμε reveal animations on scroll. Αναφέρομαι σε{" "}
      <em>απλά</em> animations όπως <em>fade-ins</em> και <em>slide-ups</em>.
      Για να καταλάβουμε αν ένα element είναι ορατό στην οθόνη, θα
      χρησιμοποιήσουμε την βιβλιοθήκη{" "}
      <a href="https://github.com/joshwnj/react-visibility-sensor">
        react-visibility-sensor
      </a>
      . Επίσης, θα αναφέρω κάποιες μικρότερες βιβλιοθήκες που μπορείτε να
      χρησιμοποιήσετε αντί της <code>react-spring</code>, που ειδικεύονται σε
      reveal animations, όπως επίσης θα δείξω και μια λύση με την{" "}
      <code>react-visibility-sensor</code> και <abbr>CSS</abbr> transitions.
    </p>
    <h2>Δημιουργία project</h2>
    <p>
      Τσέκαρε το{" "}
      <a href="https://github.com/MarkosKon/react-spring-scroll">GitHub repo</a>{" "}
      που περιέχει τον κώδικα του ολοκληρωμένου παραδείγματος. Το πρώτο πράγμα
      που πρέπει να κανεις είναι να δημιουργήσεις ένα νέο project με την βοήθεια
      της Create React App (<abbr>CRA</abbr>):
    </p>
    <pre>
      <code>
        npx create-react-app react-spring-scroll cd react-spring-scroll
      </code>
    </pre>
    <p>
      Στη συνέχεια, εγκατέστησε τα dependencies, και ξεκίνα τον development
      server:
    </p>
    <pre>
      <code>yarn add react-spring react-visibility-sensor yarn start</code>
    </pre>
    <p>
      Μετά από αυτό, άνοιξε το αρχείο <code>src/App.js</code>, και επικόλλησε το
      ακόλουθο κώδικα. Δώσε βάση στις γραμμές που είναι υπογραμμισμένες:
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
    <h3>Επεξήγηση κώδικα</h3>
    <p>
      Στο παραπάνω κώδικα χρησιμοποιούμε 2 components. Το <code>Spring</code>{" "}
      και το <code>VisibilitySensor</code>. Είναι και τα 2 <em>render prop</em>{" "}
      components, πράγμα που σήμαίνει ότι μοιράζονται την λειτουργικότητά τους
      μέσω των παραμέτρων υπορουτίνας. Για παράδειγμα, το{" "}
      <code>VisibilitySensor</code> το κάνει αυτό μέσω της παραμέτρου{" "}
      <code>isVisible</code>, και το <code>Spring</code> μέσω του{" "}
      <code>opacity</code>.
    </p>
  </main>
);
