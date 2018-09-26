import React from "react";
import ReactDOM from "react-dom";
import { createForm } from "./createForm";
import { fetchDayInfo } from "./fetchBirth";
import { fetchDeathInfo } from "./fetchDeath";
//import "./style.css";

const Hello = () => {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

ReactDOM.render(<Hello />, document.querySelector("#root"));

// const form = createForm({ id: "date-form" });
// form.addEventListener("submit", e => {
//   console.log(e.target[1].id);

//   e.preventDefault();

//     fetchDayInfo();

// });
