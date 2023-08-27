import React, { Component } from "react";
import "./Home.css";
import { ModalView } from "../modalView/ModalView";

export default class Home extends Component {
  render() {
    return (
      <div className="background">
        <div>
          <div className="social-card">
            <ModalView />
          </div>
        </div>
      </div>
    );
  }
}
