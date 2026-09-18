import { useState } from 'react'
import './App.css'


function App() {
  const [hasLiked, sethasLiked] = useState(false);
return (
 <div class='card'>
  <h2>Premium Workspace</h2>
  <button class='get-started'>Get-Started</button>
  <button onClick={() => sethasLiked(value )}>Like</button>
 </div>
) 
}
export default App
