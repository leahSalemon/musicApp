import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchComp from './components/searchComp';
import ArtistDetails from './components/artistDetails';
import { Artist } from './types/interfaces';
import './App.css'

function App() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [lastSearch, setLastSearch] = useState('');
  return (
    <>
      <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<SearchComp initialArtists={artists} onUpdateArtists={setArtists} lastSearch={lastSearch}onUpdateSearch={setLastSearch}/>} />
          <Route path="/artist/:id" element={<ArtistDetails />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App