import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchComp from './components/search/searchComp';
import ArtistDetails from './components/search/artistDetails';
import './App.css'

function App() {
  return (
    <>
      <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<SearchComp />} />
          <Route path="/artist/:id" element={<ArtistDetails />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
