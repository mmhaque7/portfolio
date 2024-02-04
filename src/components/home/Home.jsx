import React, { Component } from "react";
import "./Home.css";
import { ModalView } from "../ModalView/ModalView";
import Navbar from "../Navbar/Navbar";

export default class Home extends Component {
  render() {
    return (
      <div className="background">
        <div>
          <div className="social-card">
            <ModalView />
            <Navbar/>
          </div>
        </div>
      </div>
    );
  }
}
