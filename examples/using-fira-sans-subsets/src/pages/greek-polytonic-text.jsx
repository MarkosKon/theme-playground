import React from "react";

const preStyles = {
  fontFamily: "'Fira Sans', sans-serif",
  backgroundColor: "transparent",
  marginBottom: "calc(var(--rhythm) / 2)",
  padding: 0
};

export default () => (
  <main>
    <h1>Greek polytonic text</h1>
    <p>This page uses the following fonts:</p>
    <ul>
      <li>
        <strong>Heading + Body:</strong> FiraSans-Bold-latin.woff2{" "}
        <span className="small-caps">30.2KB</span>
      </li>
      <li>
        <strong>Body:</strong> FiraSans-Regular-greek-extended.woff2{" "}
        <span className="small-caps">9.2KB</span>
      </li>
      <li>
        <strong>Body:</strong> FiraSans-Regular-greek.woff2{" "}
        <span className="small-caps">16.1KB</span>
      </li>
      <li>
        <strong>Body:</strong> FiraSans-Regular-latin.woff2{" "}
        <span className="small-caps">28.7KB</span>
      </li>
      <li>
        <strong>Body:</strong> FiraSans-Regular-rest.woff2{" "}
        <span className="small-caps">18.5KB</span>
      </li>
    </ul>
    <p>
      The total size is <span className="small-caps">102.7KB</span>
    </p>
    {/* <p>
      The total size is <span className="small-caps">75.1KB</span>
    </p> */}
    <h2
      className="small-caps"
      style={{ fontSize: "1.5em", fontWeight: "normal" }}
    >
      ΤΑ ΠΑΛΑΙΑ ΤΩΝ ΛΑΚΕΔΑΙΜΟΝΙΩΝ ΕΠΙΤΗΔΕΥΜΑΤΑ
    </h2>
    <ol>
      <li>
        <pre style={preStyles}>
          {`Τῶν εἰσιόντων εἰς τὰ συσσίτια ἑκάστῳ
δεικνύων ὁ πρεσβύτατος τὰς θύρας, «διὰ
τούτων» φησίν, «οὐδεὶς ἐξέρχεται λόγος».`}
        </pre>
      </li>
      <li>
        <pre style={preStyles}>
          {`Δοκιμαζομένου μάλιστα παρ’ αὐτοῖς τοῦ
μέλανος λεγομένου ζωμοῦ, ὥστε μὴ κρεαδίου
δεῖσθαι τοὺς πρεσβυτέρους, παραχωρεῖν δὲ τοῖς
νεανίσκοις, λέγεται Διονύσιος ὁ τῆς Σικελίας
τύραννος τούτου χάριν Λακωνικὸν μάγειρον
πρίασθαι καὶ προστάξαι σκευάσαι αὐτῷ μηδενὸς
φειδόμενον ἀναλώματος ἔπειτα γευσάμενον
καὶ δυσχεράναντα ἀποπτύσαι καὶ τὸν μάγειρον
εἰπεῖν, «ὦ βασιλεῦ, τοῦτον δεῖ τὸν ζωμὸν
γυμνασάμενον Λακωνικῶς καὶ τῷ Εὐρώτᾳ
λελουμένον ἐποψᾶσθαι»`}
        </pre>
      </li>
      <li>
        <pre style={preStyles}>
          {`Πιόντες οἱ Λάκωνες ἐν τοῖς συσσιτίοις μετρίως
ἀπίασι δίχα λαμπάδος οὐ γὰρ ἔξεστι πρὸς φῶς
βαδίζειν οὔτε ταύτην οὔτε ἄλλην ὁδόν, ὅπως
ἐθίζωνται σκότους καὶ νυκτὸς εὐθαρσῶς καὶ
ἀδεῶς ὁδεύειν.`}
        </pre>
      </li>
      <li>
        <pre style={preStyles}>
          {`Γράμματα ἕνεκα τῆς χρείας ἐμάνθανον τῶν δὲ
ἄλλων παιδευμάτων ξενηλασίαν ἐποιοῦντο, οὐ
μᾶλλον ἀνθρώπων ἢ λόγων ἡ δὲ παιδεία ἦν
αὐτοῖς πρὸς τὸ ἄρχεσθαι καλῶς καὶ καρτερεῖν
πονοῦντα καὶ μαχόμενον νικᾶν ἢ ἀποθνῄσκειν.`}
        </pre>
      </li>
      <li>
        <pre style={preStyles}>
          {`Διετέλουν δὲ καὶ ἄνευ χιτῶνος, ἓν ἱμάτιον εἰς
τὸν ἐνιαυτὸν λαμβάνοντες, αὐχμηροὶ τὰ σώματα
καὶ λουτρῶν καὶ ἀλειμμάτων κατὰ τὸ πλεῖστον
ἀπεχόμενοι.`}
        </pre>
      </li>
      <li>
        <pre style={preStyles}>
          {`Ἐκάθευδον δὲ οἱ νέοι ὁμοῦ κατ’ ἴλην καὶ κατὰ
ἀγέλην ἐπὶ στιβάδων, ἃς αὐτοὶ συνεφόρουν,
τοῦ παρὰ τῷ Εὐρώτᾳ πεφυκότος καλάμου τὰ `}
        </pre>
      </li>
    </ol>
  </main>
);
