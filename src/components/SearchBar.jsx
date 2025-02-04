import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query.toLowerCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter disease in any language..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px 20px", marginLeft: "10px" }}>
        Search
      </button>
    </div>
  );
}
