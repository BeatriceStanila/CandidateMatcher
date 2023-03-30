
import React, {useState} from "react";
import {candidateMatch} from "../../util/match.js"

export default function Input({ requiredSkills, setRequiredSkills, candidates }) {

  console.log(requiredSkills, "Skills");
  console.log(candidates, "candidates");

 
  function eventHandler(e, requiredSkills, candidates) {
    console.log("fired");
    e.preventDefault();
    console.log("requiredSkills", requiredSkills);
  }

  function handleChange(e){

    const options = e.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setRequiredSkills([...requiredSkills, ...selectedValues]);
  }

  return (
    <form className="w-1/3 bg-green-100 m-2 flex-1">
      <label for="skills">Choose a skill:</label>
      <select id="skills" className="w-30" value={requiredSkills} onChange={handleChange}>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="CSS">CSS</option>
        <option value="HTML">HTML</option>
      </select>
    </form>
  );
}
