import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { useHistory, } from "react-router";
import axios from "axios";
import SignOut from "../SignOut";
import SignIn from "../SignIn";
import Options from "../Options";
import Option from "../Option";
import EssayForm from "../EssayForm";
import Tracking from "../Tracking";
import Track from "../Track";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: "",
      fileContent: "",
      comment: "",
      
    };
  };
  // comp= ""
  fileExtension = ""
  //   NotePage = () => {
  //     // let params = useParams();
  //     console.log("Khoa Dang");
  //     const history = useNavigate();
  //     const { id } = useParams();
  //     let [note, setNote] = useState(null);
  //     useEffect(() => {
  //       getNote();
  //     }, [id]);

  //     let getNote = async () => {
  //       if (id === "new") return;
  //       let response = await fetch(`/api/notes/${id}/`);
  //       let data = await response.json();
  //       setNote(data);
  //     };

  //     let createNote = async () => {
  //       console.log("KhoaTI");
  //       fetch(`/api/notes/create/`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(this.content),
  //       });
  //     };
  //   };

  // let CreateNote = async () => {
  //   let response = await fetch(`/api/user/create/`);
  //   console.log("Khoa DANG PHAM DANG")
  //   console.log(response)
  //   let data = await response.json()
  //   console.log(data)

  handleFileChange = (e) => {
    // let [username, setUsername]= useState([]);
    // console.log(username)
    const namename = localStorage.getItem("email")
    // const namename = global.usernameSpecial 
    // console.log(namename)
    
    // console.log("KHOAKHOAKHOATI")
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let  fileExtension = file.name.split('.').pop(); 
      console.log(fileExtension)
      let comp =""
      if (fileExtension=="") {
  
         comp = ""
  
      } else if (fileExtension ==="txt"){
  
        comp = "The file uploaded successfully!"
  
      }
      else if ((fileExtension !=="txt")) {
         comp = "Cannot upload the file"
        
      }
      console.log(comp)

      this.setState({ fileName: file.name, fileContent: reader.result, comment: comp });
      const content = this.state.fileContent;
      // const fileExtension = 
      // console.log(fileExtension)
      // console.log(content);
      // console.log("ti");
      // console.log(namename)
    
      console.log("KHOAKK")
    
      let CreateNote = async () => {
        let formField = new FormData();
        formField.append("content", content);
        formField.append("name", namename);
        formField.append("action", "create-post");
        await axios({
          method: "POST",
          url: "/api/product/create/",
          data: formField,
        }).then((response) => {console.log(response.data)});

    
      };
      CreateNote();
     
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  }

  render() {
    return (
      <div>
        <h1> File Reader</h1>
        <input type='file' onChange={this.handleFileChange}></input>
        <br />
       <h1>{this.state.comment}</h1>
        <Options/>
        {/* <EssayForm/> */}
        {/* <Tracking/> */}
        <SignOut/>
        <Track/>
      </div>
    );
    }
}

export default Test;
