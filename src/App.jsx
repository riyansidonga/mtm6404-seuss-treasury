import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Quotes from "./pages/Quotes";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>

    </div>
  )
}

export default App