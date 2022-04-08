import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";



class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      fileContent: "",
    };
  }
  handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      this.setState({ fileName: file.name, fileContent: reader.result });
      const content = this.state.fileContent;
      console.log(content);
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };
  
  render() {
    return (
      <div>
        <h1> File Reader</h1>
        <input type='file' onChange={this.handleFileChange}></input>
        <br />

        <p>{this.state.fileName}</p>
        <p>{this.state.fileContent}</p>
        <h3>Khoa</h3>
      </div>
    );
  }
}

export default Upload;
