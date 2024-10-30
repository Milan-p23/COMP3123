import React from "react";

function Welcome({ studentId, name, college, course, labTitle }){

    return (
        <div >

          <h1>Welcome to {course}</h1>
          <h2 >{labTitle}</h2>
          <p><strong>Your Student ID: {studentId}</strong></p>
          <p><strong>{name}</strong></p>
          <p>{college}</p>
        </div>
      );

}

export default Welcome;