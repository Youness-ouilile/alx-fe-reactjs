import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormikForm from './components/FormikForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FormikForm />
    </>
  )
}

export default App
