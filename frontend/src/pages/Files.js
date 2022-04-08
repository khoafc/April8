import React, { Component } from "react";
import axios from "axios";

class Files extends Component {
  state = {
    file: null,
  };

  handleFile(e) {
    let file = e.target.files[0];
    this.setState({ file: file });
  }
  handleUpload(e) {
    let file = this.state.file;
    let formdata = new FormData();
    formdata.append("text", file);
    formdata.append("name", "Khoa");
    formdata.append("action", "create-post");
    axios({
      url: `api/create-post/`,
      method: "POST",
      headers: {
        "Content-Type": "text/json",
      },
      data: formdata,
    }).then((response) => {});
  }

  render() {
    return (
      <div className='Newapp'>
        <h1>The Form</h1>
        <form>
          <label> Select File</label>
          <input type='file' name='file' onChange={(e) => this.handleFile(e)} />
          <br />
          <button type='button' onClick={(e) => this.handleUpload(e)}>
            Upload
          </button>
        </form>
      </div>
    );
  }
}
export default Files;
