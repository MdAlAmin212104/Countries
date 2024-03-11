import './App.css'
import Countries from './components/Countries/Countries'
import GrandParen from './components/grandParen/GrandParen'

function App() {
  const handleClick = (score) => {
    console.log(score);
  }
  
  return (
    <>
      <h1>this is react app</h1>
      <Countries/>
      <GrandParen 
      handleClick ={handleClick}/>
    </>
  )
}

export default App
