import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pfp from './pfp.jpg';
import google from './google.svg';
import apple from './apple.svg';
import Pane, { Button, Body } from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="grid-container" style={{ "margin": "10px", "marginBottom": "0px" }}>
      <Pane
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
                callback={() => { }}
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
        heading={<h1>Space Hubs Near<br />You</h1>}
        subtitle={<p></p>}
        body={<p style={{ "fontFamily": "monospace", "fontWeight": "600" }}>
          551 083 844 2 &nbsp; &nbsp; &nbsp; 881 781 078 1 &nbsp; &nbsp; &nbsp; 364 660 104 3<br />
          140 460 816 5 &nbsp; &nbsp; &nbsp; 744 576 043 5 &nbsp; &nbsp; &nbsp; 583 375 051 5<br />
          824 884 238 4 &nbsp; &nbsp; &nbsp; 684 307 743 5 &nbsp; &nbsp; &nbsp; 870 385 723 8<br />
        </p>}
      />

      <Pane
        heading={<h1>10 Things Unique<br />to Mars</h1>}
        subtitle={
          <div style={{ "marginLeft": "60px" }}>
            <img
              src={pfp}
              alt="Profile picture"
              width="47.52px"
              style={{ "position": "relative", "float": "left", "top": "16px", "left": "0", "boder": "0px", "borderRadius": "14px" }}
            />
            <p style={{ "fontWeight": "200", "float": "left", "paddingLeft": "0" }} >Darrel<br />Steward</p>
          </div>
        }
        body={
          <Body body={
            <div>
              <p style={{ "textAlign": "justify", "clear": "left", "marginLeft": "60px", "marginRight": "60px" }} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem unde eligendi doloribus, enim praesentium? Enim, reiciendis aspernatur recusandae voluptas nisi voluptate aut fugiat ipsum eos libero veritatis veniam distinctio.
                Optio nulla, ducimus a aut dolorem, ipsa cumque quos deserunt tenetur, reiciendis dolore sed harum perferendis voluptatibus. Qui repellendus fuga sit? Facere iusto libero consectetur molestiae voluptatum corrupti veniam facilis?
                Neque laboriosam porro, sit voluptatibus non animi distinctio exercitationem possimus repudiandae officia eveniet...
              </p>
              <p style={{ "fontWeight": "500" }}>Read More</p>
            </div>
          }
          />}
      />

      <Pane
        heading={<h1>Login/Sign Up</h1>}
        subtitle={<p></p>}
        body={
          <div>
            <div
              className="flex-container-1"
              style={{
                "position": "relative", "width": "34%", "float": "left", "marginLeft": "30%", "top": "-10px", "borderRight": "2px solid black", "borderRadius": ".5px"
              }}>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div style={{
              "position": "relative", "display": "flex", "flexDirection": "column", "width": "32px", "top": "-6.5px", "float": "left", "left": "5%"
            }}>
              <img src={google} width="31.5px" style={{ "marginBottom": "5px" }} />
              <img src={apple} width="31.5px" />
            </div>
          </div>
        }
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);