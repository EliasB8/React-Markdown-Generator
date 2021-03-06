import React from "react";
import Previewer from "./Previewer";
import Editor from "./Editor";
import Footer from "./Footer";
import startingText from "../startingText";

class Main extends React.Component {
  constructor(props) {
    super(props);
    // Initializing state
    this.state = {
      markdownText: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // setting default text
  componentDidMount() {
    this.setState({
      markdownText: startingText
    });
  }

  // listening for input change
  handleChange(event) {
    this.setState({
      markdownText: event.target.value
    });
  }

  render() {
    return (
      <>
        <div className="title">
          <h1>React Markdown Generator</h1>
        </div>
        <div className="Main">
          <Editor
            handleChange={this.handleChange}
            defaultText={this.state.markdownText}
          />
          <Previewer text={this.state.markdownText} />
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
