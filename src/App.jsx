import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {

  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")

  function savePrompt(event) {
    setPrompt(event.target.value)
  }

  async function generateResponse() {
    const res = await axios.post('http://127.0.0.1:8000/generate', {
      prompt: prompt
    })
    setResponse(res.data.response)
  }

  return(
    <div className="container">
      <h1>FastAPI Gemini App</h1>
      <textarea placeholder="Enter your prompt" onChange={savePrompt} />
      <button onClick={generateResponse}>Generate</button>
      <div className="response-box">
        <h2>AI Response</h2>
        <p>{response}</p>
      </div>
    </div>
  )
}

export default App