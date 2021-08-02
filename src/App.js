import React from "react";
import logo from './logo.svg';
import './App.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pane">
        <h1>Here when you want to get away.</h1>
        <p>Which one are you today?</p>
        <div className="clearfix">
          <div className="box">
            <button className="button" onClick={() => { console.log("Pressed") }}>
              <em>
                “I don’t know where but I <b>do</b> know where. I’ve been there in my dreams but I don’t know its <b>name</b>.”
              </em>
            </button>
          </div>
          <div className="box">
            <button className="button" onClick={() => { console.log("Pressed") }}>
              <em>
                “I know <b>exactly</b> where I want to go and I can’t wait.”
              </em>
            </button>
          </div>
        </div>
      </div>
    );
  }
}