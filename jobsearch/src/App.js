import { useState } from "react";
import "./App.css";
import CandidateDisplay from "./components/CandidateDisplay/CandidateDisplay";
import Input from "./components/Input/Input";
import { candidatesList } from "./candidatesData/candidatesList";
import { candidateMatch } from "./util/match";

export function App() {
  const [requiredSkills, setRequiredSkills] = useState(["AWS"]);
  const [candidates, setCandidates] = useState(candidatesList)

  function handleClick(candidates, requiredSkills){
    candidateMatch(candidates, requiredSkills)

  }
  
  return (
    <div className="bg-red-100 w-full h-100vh">
      <Input
        requiredSkills={requiredSkills}
        setRequiredSkills={setRequiredSkills}
        candidates = {candidates}
      />
      <button onClick={(candidates, requiredSkills)=>handleClick(candidates, requiredSkills)}>Get your candidate</button>
      <CandidateDisplay />
    </div>
  );
}

export default App;
