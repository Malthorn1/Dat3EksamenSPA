import React, { useState, useEffect } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

let baseurl = "https://coffeeaddict.dk/EksamenProjektAPI/api/";

let PostYogaClassUrl = baseurl + "/yoga/add";

// function PostmanSetting(method, person) {
//   var opts = {
//     method: method,
//     headers: {
//       "Content-type": "application/json",
//       Accept: "application/json",
//     },
//   };
//   if (person) {
//     opts.body = JSON.stringify(person);
//   }
//   return opts;
// }

export default function YogaClass() {
  const [PostId, setPostId] = useState([]);
  const [data, setData] = useState([]);

  function AddYogaClassFunction() {
    let MaxParticipants = document.getElementById("AddMaxParticipants").value; 
    let startDate = document.getElementById("AddstartDate").value; 
    let price = document.getElementById("Addprice").value; 
    let courseID = document.getElementById("AddcourseID").value; 
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        maxParticipants: MaxParticipants,
        startDate: startDate,
        price: price,
        courseID: courseID ,
      }),
    };
    fetch("https://coffeeaddict.dk/EksamenProjektAPI/api/yoga/add", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  }
  
  function EditYogaClassFunction() {
    let MaxParticipants = document.getElementById("EditMaxParticipants").value; 
    let startDate = document.getElementById("EditstartDate").value; 
    let price = document.getElementById("Editprice").value; 
    let courseID = document.getElementById("EditcourseID").value; 
    let value = document.getElementById("EditYogaClassID").value;  
  
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        id: value,
        maxParticipants: MaxParticipants,
        startDate: startDate,
        price: price,
        courseID: courseID ,
      }),
    };
    fetch("https://coffeeaddict.dk/EksamenProjektAPI/api/yoga/edit/"+value, requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  }
  
  



  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4 text-primary">Add Yoga Class</h1>
        <input type="number" id="AddMaxParticipants" placeholder="MaxParticipants"/>
        <input type="text" id="AddstartDate" placeholder="startDate"/>
        <input type="number" id="Addprice" placeholder="price"/>
        <input type="number" id="AddcourseID" placeholder="courseID"/>
        <button  type="submit" onClick={AddYogaClassFunction}>Submit</button> 

        

      </div>
      <div className="jumbotron"> 
      <h1 className="display-4 text-primary">Edit Yoga Class</h1>
      <input type="number" id="EditYogaClassID" placeholder="YogaClassID"/>
        <input type="number" id="EditMaxParticipants" placeholder="MaxParticipants"/>
        <input type="text" id="EditstartDate" placeholder="startDate"/>
        <input type="number" id="Editprice" placeholder="price"/>
        <input type="number" id="EditcourseID" placeholder="courseID"/>
        <button  type="submit" onClick={EditYogaClassFunction}>Submit</button> 

        




      </div>
    </div>
  );
}





