import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchJokes = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await axios.get('/api/jokes')
        setJokes(response.data)
        setCount(response.data.length)
      } catch (err) {
        setError(err.response?.data?.message || err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchJokes()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className="card">
        <h2>Backend Communication Test</h2>
        
        {loading && <p>Loading jokes...</p>}
        
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        
        {jokes.length > 0 && (
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h3>Jokes from Backend:</h3>
            {jokes.map((joke) => (
              <div key={joke.id} style={{ 
                marginBottom: '15px', 
                padding: '10px', 
                border: '1px solid #646cff',
                borderRadius: '5px'
              }}>
                <p><strong>Q:</strong> {joke.setup}</p>
                <p><strong>A:</strong> {joke.punchline}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
