import React, { useState } from 'react';

function App() {
  const [profits, setProfits] = useState([]);
  const [amount, setAmount] = useState("");

  const addProfit = () => {
    if (amount !== "") {
      setProfits([...profits, parseFloat(amount)]);
      setAmount("");
    }
  };

  const totalProfit = profits.reduce((a, b) => a + b, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Personal Profit Manager</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter profit"
      />
      <button onClick={addProfit}>Add</button>
      <h2>Total Profit: ₹{totalProfit}</h2>
      <ul>
        {profits.map((amt, index) => (
          <li key={index}>₹{amt}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;