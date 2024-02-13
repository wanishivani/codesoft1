import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ShareQuote from "./shareqoutes";
function App() {
  const [advice, setAdvice] = useState();
  const [count, setCount] = useState(0);

  async function Advice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    Advice();
  }, []);
  return (
    <div className="App">
      <div className="card">
        <h1>{advice}</h1>
        <button className='button' onClick={Advice}>Click</button>

        <Message count={count} />
      </div>
      <ShareQuote/>
    </div>
  );
}
function Message(props) {
  return (
        
      <div>{props.count}
    <p className="qoute">
      you have read Qoutes!!!!
    </p>

    </div>
    
  );
}
export default App;
