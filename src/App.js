import React, { useState } from 'react';
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

export default function Pane({ heading, subtitle, body }) {
  const [paneVisibility, setPaneVisibility] = useState(true);
  function hidePane() {
    setPaneVisibility(false);
  }

  body = body === undefined ? <CallToAction callback={hidePane} /> : body;

  return paneVisibility ? (
    <div className="pane">
      {heading}
      {subtitle}
      {body}
    </div>
  ) : null;
}

export const CallToAction = props => {
  return (
    <div className="clearfix">
      <Button
        callback={() => { console.log("Pressed") }}
        message={
          <em>
            “I don’t know where but I <b>do</b> know where. I’ve been there in my dreams but I don’t know its <b>name</b>.”
          </em>
        } />
      <Button
        callback={(event) => { props.callback(event.target.value); }}
        message={
          <em>
            “I know <b>exactly</b> where I want to go and I can’t wait.”
          </em>
        } />
    </div>
  );
}
