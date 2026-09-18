const Card = ({ title, description }) => { 
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
import './App.css'

function App() {
return (
  <div>
    <h2>Functional Statement</h2>
    <Card title="Card Title" description="This is a description of the card." />
  </div>
)
}
export default App
