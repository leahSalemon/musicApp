import { useState } from 'react';
import { Artist } from '../types/interfaces';
import { fetchArtistsByName } from '../api/musicServices';
import SearchInput from './searchInput';
import ArtistCard from './artistCard';
import { useFetch } from '../hooks/useFetch';
import './searchComp.css';

const SearchComp = () => {
  const { data: artists, loading, error, execute: searchArtist } = useFetch< Artist [ ] , string >(fetchArtistsByName);
  const [wasSearched, setWasSearched] = useState<boolean>(false);

  const handleSearch = async (term: string) => {
    if (!term.trim()) 
      return;
    try {
      await searchArtist(term);
      setWasSearched(true);
    }
    catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  const displayNoResults = () => {
    if (wasSearched &&  !loading) {
      return <p>No results found yet.</p>;
    }
    return null;
  }

  const displayArtists = () => {
    return artists?.map(artist => <ArtistCard key={artist.id} artist={artist} />);
  };

  const displayArtistResults = () => artists && artists.length > 0 ? displayArtists() : displayNoResults();

  return (
    <div className="search-comp">
      <h1>Music Search</h1>
      <SearchInput onSearch={handleSearch} loadingSearch={loading} />
      { error && < p className="error-msg" > { error } </p> }
      <div className="artist-results">
        { displayArtistResults() }
      </div>
    </div>
  );
};

export default SearchComp;