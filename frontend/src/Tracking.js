import React from "react";
import { Component , useState, useEffect} from "react";
import axios from "axios";
class Tracking extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: ''
      };
  
      this.handleSubmit1 = this.handleSubmit1.bind(this);
 
    }
     handleSubmit1 =() => {
      const namename = localStorage.getItem("email")
     console.log(namename)
      let Word1= async () => {
        let formField = new FormData();
        formField.append("email", namename);
        formField.append("action", "tracking");
        await axios({
          method: "POST",
          url: "/api/user/tracking/",
          data: formField,
        }).then((response) => {console.log(response.data)
            let aa= response.data
            let length = aa.length
            console.log(length)
            console.log(aa)
            
        });

    
      };
      
      Word1();

    }

    render() {
      return (
        <div>
        <button onClick={this.handleSubmit1}>Tracking</button>
        {/* <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <h1>{localStorage.getItem("profilePic")}</h1> */}
      </div>

      );
    }
  }
  export default Tracking