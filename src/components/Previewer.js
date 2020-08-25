import React from "react";
import marked from "marked";

function Previewer(props) {
  return (
    <div className="preview-container">
      <h3 className="headers">
        <i className="fa fa-window-maximize" aria-hidden="true"></i> Preview
      </h3>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(props.text) }}
        className="preview"
      ></div>
    </div>
  );
}

export default Previewer;
