import React from "react";
import { Component } from "react";
import axios from "axios";

class Option extends Component {
    constructor(props) {
      super(props);
      this.state = {value: 'default'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    Word1 = async () => {
        const email = localStorage.getItem("email")
        let formField = new FormData();
        formField.append("email", email);
        formField.append("action", this.state.value);
        await axios({
          method: "POST",
          url: "/api/user/getword/",
          data: formField,
        }).then((response) => {      
        //   localStorage.setItem("getword", response.data);
        console.log("KHOAPHAM")
        const teo = response.data
        console.log(teo)
        })}
    handleSubmit(event) {
       this.Word1()
       console.log(this.state.value)
        }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick the word from the list:
            <select value={this.state.value} onChange={this.handleChange}>
            <option value = "ownword"> Your Own Word</option>
            <option value = "default"> Default</option>
            </select>
            <br/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
  }

  export default Option