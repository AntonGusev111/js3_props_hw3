import data from './data.json'
import './App.css'
import Listing from './components/Listing'

function App() {

  return (
    <div className="App">
     <Listing data = {data} />
    </div>
  )
}

export default App
