import './App.css';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Results from './components/results/results.js';
import Form from './components/form/form.js';
import {useState} from "react"

function App() {
  const [result,setResult] = useState(

  )
  
  function onSubmit(text){
    let mockResults = `get ${text}`;
    console.log(mockResults);
    setResult(mockResults);
  }
  return <>
  <Header />
  <Form onSubmit={onSubmit}/>
  <Results mockResults={result || ''} />
  <Footer />
  </>;
}


export default App;
