import React, { useState, useEffect} from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";


export default function Instructor(){
  const [PostId, setPostId] = useState([]);
  const [data, setData] = useState([]);

  function AddInstructorFunction() {
    let addInstructorName = document.getElementById("addInstructorName").value; 

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: addInstructorName


      }),
    };
    fetch("https://coffeeaddict.dk/EksamenProjektAPI/api/instructor/add", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  }

  function EditInstructorFunction() {
    let EditInstructorName = document.getElementById("EditInstructorName").value; 
    let value = document.getElementById("EditInstructorID").value
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: EditInstructorName,
      }),
    };
    fetch("https://coffeeaddict.dk/EksamenProjektAPI/api/instructor/edit/"+value, requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  }

  function DeleteInstructorFunction() {
    let DeleteInstructorID = document.getElementById("DeleteInstructorID").value; 
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        id: DeleteInstructorID,
      }),
    };
    fetch("https://coffeeaddict.dk/EksamenProjektAPI/api/instructor/delete", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  }
  
  
    
    return (
      <div className="container">
      <div className="jumbotron">
        <h1 className="display-4 text-primary">Add Instructor</h1>
        <input type="text" id="addInstructorName" placeholder="Name"/>
        <button  type="submit" onClick={AddInstructorFunction}>Submit</button> 
      </div>
      <div className="jumbotron"> 
      <h1 className="display-4 text-primary">Edit Instructors Name</h1>
        <input type="text" id="EditInstructorName" placeholder="Name"/>
        <input type="number" id="EditInstructorID" placeholder="ID"/>
        <button  type="submit" onClick={EditInstructorFunction}>Submit</button> 
      </div>
      <div className="jumbotron"> 
      <h1 className="display-4 text-primary">Delete Instructor</h1>
        <input type="text" id="DeleteInstructorID" placeholder="ID"/>
        <button  type="submit" onClick={DeleteInstructorFunction}>Submit</button> 
      </div>
    </div>
      );


  };