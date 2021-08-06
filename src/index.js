import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pfp from './pfp.jpg';
import google from './google.svg';
import apple from './apple.svg';
import Pane, { Button, Body } from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <div style={{ "margin": "10px" }}> */}
    <Pane
      alignment={{ "position": "relative" }}
      heading={<h1>Here when you want to get away.</h1>}
      subtitle={<p>Which one are you today?</p>}
      body={
        <Body body={
          <div className="clearfix">
            <Button
              callback={() => { console.log("Pressed") }}
              message={
                <em>
                  “I don’t know where but I <b>do</b> know where. I’ve been there in my dreams but I don’t know its <b>name</b>.”
                </em>
              } />
            <Button
              callback={() => { console.log("Pressed") }}
              message={
                <em>
                  “I know <b>exactly</b> where I want to go and I can’t wait.”
                </em>
              } />
          </div>
        } />
      }
    />

    <Pane
      alignment={{ "position": "relative", "float": "right", "width": "49.15%", "marginLeft": "0px" }}
      heading={<h1>10 Things Unique<br />to Mars</h1>}
      subtitle={
        <div style={{ "padding": "10px" }}>
          <img
            src={pfp}
            alt=""
            width="66"
            style={{ "position": "relative", "float": "left", "top": "16px", "left": "8px", "boder": "0px", "borderRadius": "14px" }}
          />
          <p style={{ "fontWeight": "200", "float": "left" }} >Darrel<br />Steward</p>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      }
      body={
        <Body body={
          <div>
            <p style={{ "textAlign": "justify" }} >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam praesentium vel quos rem itaque rerum voluptatibus optio reiciendis atque, debitis natus accusamus, odio, blanditiis dolores laborum totam molestias nisi fugit.
              Repellat sint consequatur iusto dolor. A dicta eveniet obcaecati voluptas animi sit quia eligendi provident maiores recusandae qui adipisci nemo suscipit aliquid laboriosam praesentium soluta iusto expedita, aspernatur dolor officia?
              Fugit, non suscipit voluptatibus...
            </p>
            <p style={{ "fontWeight": "500" }}>Read More</p>
          </div>
        }
        />}
    />

    <Pane
      alignment={{ "position": "relative", "float": "left", "width": "49.15%", "marginRight": "0px" }}
      heading={<h1>Space Hubs Near<br />You</h1>}
      subtitle={<p></p>}
      body={<p style={{ "fontFamily": "monospace", "fontWeight": "600" }}>
        551 083 844 2 &nbsp; &nbsp; &nbsp; &nbsp; 881 781 078 1 &nbsp; &nbsp; &nbsp; &nbsp; 364 660 104 3<br />
        140 460 816 5 &nbsp; &nbsp; &nbsp; &nbsp; 744 576 043 5 &nbsp; &nbsp; &nbsp; &nbsp; 583 375 051 5<br />
        824 884 238 4 &nbsp; &nbsp; &nbsp; &nbsp; 684 307 743 5  &nbsp; &nbsp; &nbsp; &nbsp; 870 385 723 8<br />
      </p>}
    />

    <Pane
      alignment={{ "position": "relative", "float": "left", "width": "49.15%", "paddingBottom": "27px" }}
      heading={<h1>Login/Sign Up</h1>}
      subtitle={<p></p>}
      body={
        <div style={{}}>
          <div
            className="flex-container-1"
            style={{
              "position": "relative", "width": "25%", "float": "left", "left": "300px", "borderRight": "2px solid black", "borderRadius": ".5px"
            }}>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div style={{
            "position": "relative", "display": "flex", "flexDirection": "column", "width": "40px", "top": "2.5px", "right": "330px", "float": "right"
          }}>
            <img src={google} width="40px" style={{ "marginBottom": "5px" }} />
            <img src={apple} width="40px" />
          </div>
        </div>
      }
    />

    {/* </div> */}
  </React.StrictMode>,
  document.getElementById('root')
);