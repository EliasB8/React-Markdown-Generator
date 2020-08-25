import React from "react";

function Editor(props) {
  return (
    <div className="editor-container">
      <h3 className="headers">
        <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Editor
      </h3>
      <textarea
        id="editor"
        className="editor"
        onChange={props.handleChange}
        value={props.defaultText}
      />
    </div>
  );
}

export default Editor;
