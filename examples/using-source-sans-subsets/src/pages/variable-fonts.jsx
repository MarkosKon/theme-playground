import React, { useState } from "react";

export default () => {
  const [headingSize, setHeadingSize] = useState(67);
  const [headingWeight, setHeadingWeight] = useState(700);
  const [bodySize, setBodySize] = useState(20);
  const [bodyWeight, setBodyWeight] = useState(400);
  return (
    <div style={{ fontFamily: "'Source Sans Variable', sans-serif" }}>
      <header
        style={{
          maxWidth: "calc(var(--rhythm) * 24)",
          margin: "var(--rhythm) auto 0"
        }}
      >
        <div
          style={{
            width: "max-content",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <label
            style={{ display: "flex", alignItems: "center" }}
            htmlFor="heading-size"
          >
            <strong>Heading size: </strong>
            <input
              style={{ marginLeft: "calc(var(--rhythm) / 2)" }}
              type="range"
              name="heading-size"
              id="heading-size"
              min={16}
              max={200}
              step={1}
              value={headingSize}
              onChange={e => setHeadingSize(Number(e.target.value))}
            />
          </label>
          <label
            style={{ display: "flex", alignItems: "center" }}
            htmlFor="heading-weight"
          >
            <strong>Heading weight: </strong>
            <input
              style={{ marginLeft: "calc(var(--rhythm) / 2)" }}
              type="range"
              name="heading-weight"
              id="heading-weight"
              min={200}
              max={900}
              step={10}
              value={headingWeight}
              onChange={e => setHeadingWeight(Number(e.target.value))}
            />
          </label>
          <label
            style={{ display: "flex", alignItems: "center" }}
            htmlFor="body-size"
          >
            <strong>Body size: </strong>
            <input
              style={{ marginLeft: "calc(var(--rhythm) / 2)" }}
              type="range"
              name="body-size"
              id="body-size"
              min={12}
              max={100}
              step={1}
              value={bodySize}
              onChange={e => setBodySize(Number(e.target.value))}
            />
          </label>
          <label
            style={{ display: "flex", alignItems: "center" }}
            htmlFor="body-weight"
          >
            <strong>Body weight: </strong>
            <input
              style={{ marginLeft: "calc(var(--rhythm) / 2)" }}
              type="range"
              name="body-weight"
              id="body-weight"
              min={200}
              max={900}
              step={10}
              value={bodyWeight}
              onChange={e => setBodyWeight(Number(e.target.value))}
            />
          </label>
        </div>
      </header>
      <main>
        <h1 style={{ fontSize: `${headingSize}px`, fontWeight: headingWeight }}>
          <em>Variable</em> fonts example
        </h1>
        <p style={{ fontSize: `${bodySize}px`, fontWeight: bodyWeight }}>
          <em>OpenType variable fonts</em> are an extension to the OpenType
          specification, introduced in OpenType 1.8. On 14 September 2016,
          Adobe, Apple, Google, and Microsoft announced the technology, which
          allows a single font file to store a continuous range of design
          variants. Description from{" "}
          <a href="https://en.wikipedia.org/wiki/Variable_fonts">
            Wikipedia Variable Fonts
          </a>{" "}
          page. <code>I&apos;m not variable.</code>
        </p>
      </main>
    </div>
  );
};
