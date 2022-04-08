import React, { Component, useState, useEffect} from 'react'
import axios from "axios";
function Options(){
    const[word, setWord] = useState("ownword")
    useEffect(() => {
        Word1()
      });
        let Word1 = async () => {
            const email = localStorage.getItem("email")
            console.log(email)
            let formField = new FormData();
            formField.append("email", email);
            formField.append("action", word);
            await axios({
              method: "POST",
              url: "/api/user/getword/",
              data: formField,
            }).then((response) => {   
            console.log(response.data)
            localStorage.setItem("keyword", response.data)


            })}
    return(
      <div>
            <p1>Please choose the library word <br/></p1>
            <select className='custom-select' value = {word} onChange= {(e)=>{
                const selectedWord = e.target.value;
                setWord(selectedWord)
            }}>   
            <option value = "ownword"> Your Own Word</option>
            <option value = "default"> Default</option>
            </select>
        </div>
    )
}
export default Options