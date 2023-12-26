import { BrowserRouter, Route, Routes } from "react-router-dom"
import All from "./components/All"
import Nav from "./components/Nav"
import Fullstack from "./components/Fullstack"
import Datascience from "./components/Datascience"
import Cyber from "./components/Cyber"
import Career from "./components/Career"
import "./App.css";

function App() {
 

  return (
   
    <BrowserRouter>
    <Nav/>
     <Routes>
       <Route path="/" element={<All/>} />
       <Route path="/fullstack" element={<Fullstack/>} />
       <Route path="/datascience" element={<Datascience/>} />
       <Route path="/cyber" element={<Cyber/>} />
       <Route path="/career" element={<Career/>} />
     </Routes>
    </BrowserRouter>
   
  )
}

export default App
