import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchComp from './components/searchComp/searchComp';
import ArtistDetails from './components/artistDetails/artistDetails';
import { Artist } from './types/interfaces';

function App() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [lastSearch, setLastSearch] = useState('');
  return (
    <div className='min-h-screen w-full bg-gray-50 flex flex-col text-left'>
      <Router>
      <div className="min-h-screen w-full bg-gray-50 text-slate-900">
        <Routes>
          <Route path="/" element={<SearchComp initialArtists={artists} onUpdateArtists={setArtists} lastSearch={lastSearch}onUpdateSearch={setLastSearch}/>} />
          <Route path="/artist/:id" element={<ArtistDetails />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App