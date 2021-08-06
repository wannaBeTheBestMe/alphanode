import React from "react";
import logo from './logo.svg';
import './App.css';

export function Button(props) {
  const buttonWidth = 100 / props.buttons;
  const padding = 9 / 25 * buttonWidth;
  const requiredStyles = { "width": `${buttonWidth}%`, "paddingLeft": padding, "paddingRight": padding };
  return (
    <div className="box" style={requiredStyles}>
      <button className="button" onClick={props.callback}>
        {props.message}
      </button>
    </div>
  );
}

Button.defaultProps = {
  buttons: 2,
};

export function Body(props) {
  return props.body;
}

export default class Pane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.alignment} className="pane">
        {this.props.heading}
        {this.props.subtitle}
        {<Body body={this.props.body} />}
      </div>
    );
  }
}