const Card = (props) => { 
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
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
