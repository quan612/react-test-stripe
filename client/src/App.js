import logo from "./logo.svg";
import "./App.css";

import Payment from "./Payment";

function App() {
  return (
    <div className="App">
      <h1>Testing payment purpose</h1>
      <p className="App-intro">
        <Payment name={"Integration with Stripe"} description={"Test"} amount={4.99} />
      </p>
    </div>
  );
}

export default App;
