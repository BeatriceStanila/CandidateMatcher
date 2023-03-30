import { useState } from "react";
import "./App.css";
import CandidateDisplay from "./components/CandidateDisplay/CandidateDisplay";
import Input from "./components/Input/Input";

export function App() {
  const [requiredSkills, setRequiredSkills] = useState([]);


  return (
    <div className="bg-red-100   pt-2 flex flex-cols">
      <Input
        requiredSkills={requiredSkills}
        setRequiredSkills={setRequiredSkills}
      
      />
      <CandidateDisplay />
    </div>
  );
}

export default App;
