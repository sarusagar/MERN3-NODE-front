import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './assets/pages/Home'
import SingleBlog from './assets/pages/SingleBlog'
import CreateBlog from './assets/components/CreateBlog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element= {<CreateBlog/>} />
            <Route path='/blog/:id' element={<SingleBlog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
