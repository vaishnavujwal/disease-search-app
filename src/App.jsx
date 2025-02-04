import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
import diseases from "./data/diseases";
import { findClosestMatch } from "./utils/spellCheck";
import { translateToEnglish } from "./utils/translate";
import logo from "./assets/doctor1.png";

export default function App() {
  const [tablet, setTablet] = useState("");
  const [info, setInfo] = useState("");

  const handleSearch = (query) => {
    let translatedQuery = translateToEnglish(query);
    let diseaseKeys = Object.keys(diseases);
    let match = diseases[translatedQuery.toLowerCase()];

    if (!match) {
      let closestMatch = findClosestMatch(translatedQuery, diseaseKeys);
      if (closestMatch) {
        match = diseases[closestMatch];
      }
    }

    if (match) {
      setTablet(match.tablet);
      setInfo(match.info);
    } else {
      setTablet("");
      setInfo("No tablet found for this disease. Please check your spelling.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={logo} alt="App Logo" style={{ width: "150px", marginBottom: "20px" }} />
      <h1>Type Your Disease</h1>
      <SearchBar onSearch={handleSearch} />
      <Result tablet={tablet} info={info} />
    </div>
  );
}
