import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColor";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <h4 id="wd-ai-cascade" className="wd-ai-cascade">
        This paragraph demonstrates selector specificity: tag, class, and id all
        apply, but the ID should win.
      </h4>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This paragraph demonstrates a style attribute with a purple background
        and white text.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Another paragraph.
      </p>
      <h3>ID selectors</h3>
      <p id="wd-id-selector-1">
        Instead of changing the look and feel of all the elements of the same
        name, e.g., P, we can refer to a specific element by its ID
      </p>
      <p id="wd-id-selector-2">
        Here&apos;s another paragraph using a different ID and a different look
        and feel
      </p>
      <p id="wd-ai-id-selector">
        This paragraph demonstrates an AI-generated ID selector with its own
        look and feel.
      </p>
      <p id="wd-id-selector-3">
        This is another paragraph with an id-specific color style.
      </p>
      <div id="wd-css-id-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          This paragraph demonstrates an AI class selector with its own styling.
        </p>
        <h4 className="wd-ai-class-selector">
          This heading uses the same AI class styling.
        </h4>
        <p className="wd-your-class">This is a paragraph with my class.</p>
        <h4 className="wd-your-class">This is a heading with my class.</h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
                <br />
                <span className="wd-selector-5">
                  .wd-selector-2 .wd-selector-3 .wd-selector-4 .wd-selector-5
                </span>
                <br />
                <span className="wd-ai-selector-5">
                  .wd-selector-1 .wd-ai-selector-5
                </span>
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
        <h1 id="conflict-id" className="conflict-class">Conflicting heading.</h1>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
    </div>
  );
}
