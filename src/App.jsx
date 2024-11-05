import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'

const sampleData = {
  name: "John Doe",
  phone: 12345678,
  email: "JohnDoe123@example.com",
  location: "Unknown"
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      style={{
        backgroundColor:"black",
        width:"100vw"
      }}
    >
      <Resume data={sampleData}></Resume>
    </div>
  )
}

export default App
