import { useState } from 'react'
import './App.css'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState<number | null>(null)

  return (
    <div className="container">
      <h1>My CI/CD Test App</h1>
      <p>merge from dev-matej</p>

      <input
        type="number"
        aria-label="first-number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />

      <span> + </span>

      <input
        type="number"
        aria-label="second-number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={() => setResult(a + b)}>
        Calculate
      </button>

      {result !== null && (
        <p>Result: {result}</p>
      )}
    </div>
  )
}

export default App
