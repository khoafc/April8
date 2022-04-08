import React from "react";
import { Component , useState, useEffect} from "react";
import axios from "axios";
class EssayForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: ''
      };
  
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleSubmit1 = this.handleSubmit1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit2 = this.handleSubmit2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleSubmit3 = this.handleSubmit3.bind(this);
      this.handleChange4 = this.handleChange4.bind(this);
      this.handleSubmit4 = this.handleSubmit4.bind(this);
      this.handleChange5 = this.handleChange5.bind(this);
      this.handleSubmit5 = this.handleSubmit5.bind(this);
    }
  
    handleChange1(event) {
      this.setState({value1: event.target.value});
   
    }
     
    handleChange2(event) {
        this.setState({value2: event.target.value});
      }
    handleChange3(event) {
      this.setState({value3: event.target.value});
    }
      
    handleChange4(event) {
        this.setState({value4: event.target.value});
      }
          
      handleChange5(event) {
        this.setState({value5: event.target.value});
      }

    handleSubmit1(event) {
      // alert('An essay was submitted: ' + this.state.value1);
      event.preventDefault();

      const namename = localStorage.getItem("email")
    
      let Word1= async () => {
        let formField = new FormData();
        formField.append("value", this.state.value1);
        formField.append("email", namename);
        formField.append("action", "word1");
        console.log(this.state.value1)
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)});

    
      };
      
      Word1();
      
        

    }





    handleSubmit2(event) {
      event.preventDefault();

      const namename = localStorage.getItem("email")
    
      let Word2= async () => {
        let formField = new FormData();
        formField.append("value", this.state.value2);
        formField.append("email", namename);
        formField.append("action", "word2");
        console.log(this.state.value2)
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)});

    
      };
      
      Word2();
      }


      handleSubmit3(event) {
        event.preventDefault();

        const namename = localStorage.getItem("email")
      
        let Word3= async () => {
          let formField = new FormData();
          formField.append("value", this.state.value3);
          formField.append("email", namename);
          formField.append("action", "word3");
          console.log(this.state.value1)
          await axios({
            method: "POST",
            url: "/api/user/getdata/",
            data: formField,
          }).then((response) => {console.log(response.data)});
  
      
        };
        
        Word3();
      }



      handleSubmit4(event) {
        event.preventDefault();

        const namename = localStorage.getItem("email")
      
        let Word4= async () => {
          let formField = new FormData();
          formField.append("value", this.state.value4);
          formField.append("email", namename);
          formField.append("action", "word4");
          console.log(this.state.value1)
          await axios({
            method: "POST",
            url: "/api/user/getdata/",
            data: formField,
          }).then((response) => {console.log(response.data)});
  
      
        };
        
        Word4();
        }



        handleSubmit5(event) {
               event.preventDefault();

      const namename = localStorage.getItem("email")
    
      let Word5= async () => {
        let formField = new FormData();
        formField.append("value", this.state.value5);
        formField.append("email", namename);
        formField.append("action", "word5");
        console.log(this.state.value1)
        await axios({
          method: "POST",
          url: "/api/user/getdata/",
          data: formField,
        }).then((response) => {console.log(response.data)});

    
      };
      
      Word5();}
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit1}>
        <label>
          Word 1:
          <textarea value={this.state.value1} onChange={this.handleChange1} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <form onSubmit={this.handleSubmit2}>
        <label>
          Word 2:
          <textarea value={this.state.value2} onChange={this.handleChange2} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={this.handleSubmit3}>
        <label>
          Word 3:
          <textarea value={this.state.value3} onChange={this.handleChange3} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={this.handleSubmit4}>
        <label>
          Word 4:
          <textarea value={this.state.value4} onChange={this.handleChange4} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form onSubmit={this.handleSubmit5}>
        <label>
          Word 5:
          <textarea value={this.state.value5} onChange={this.handleChange5} />
        </label>
        <input type="submit" value="Submit" />
      </form>
          </div>

      );
    }
  }
  export default EssayForm