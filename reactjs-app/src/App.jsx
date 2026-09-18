import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (hasLiked) {
      console.log("you liked the workspace");
    }
  }, [hasLiked]);

  const handleLike = () => {
    setHasLiked(!hasLiked);
    setCount(hasLiked ? count - 1 : count + 1);
  };

  return (
    <div className="card">
      <h2>Premium Workspace</h2>

      <button className="get-started">Get Started</button>

      <button onClick={handleLike} className="like-btn">
        {hasLiked ? "❤️" : "🤍"} {count}
      </button>
    </div>
  );
}

export default App;