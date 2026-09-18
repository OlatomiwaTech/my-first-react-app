
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>Premium Workspace</h2>

      <button className="get-started">Get Started</button>

      <button onClick={() => setHasLiked(!hasLiked)} className="like-btn">
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default App;

