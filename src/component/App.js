import React, { createRef } from "react";
// import Editor from "../component/Editor";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import ConfettiGenerator from "confetti-js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.code = createRef();
    this.confetti = null;
  }

  componentDidMount() {
    let editor = new EditorView({
      extensions: [basicSetup, javascript()],
      parent: this.code.current,
    });

    var confettiSettings = { target: "fun" };
    this.confetti = new ConfettiGenerator(confettiSettings);
    this.confetti.render();
  }

  componentWillUnmount() {
    this.confetti.clear();
  }

  render() {
    console.log(this.code);
    return (
      <>
        <h1>Hello World!</h1>
        <div ref={this.code}></div>
        <canvas id="fun"></canvas>
      </>
    );
  }
}
export default App;
