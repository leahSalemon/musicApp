import { useState } from 'react';
import { Artist } from '../types/interfaces';
import { fetchArtistsByName } from '../api/musicServices';
import SearchInput from './searchInput';
import ArtistCard from './artistCard';

const SearchPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (term: string) => {
    setLoading(true);
    try {
      const data = await fetchArtistsByName(term);
      console.log("Fetched artists:", data);
      setArtists(data || []);
    } 
    catch (error) {
      console.error("Error fetching artists:", error);
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <h1>Music Search</h1>
    
      <SearchInput onSearch={handleSearch} />

      {loading && <p>Searching...</p>}

      <div className="artist-results">
        {artists.length > 0 ? (<ArtistCard/>) : (
          !loading && <p>No results found yet.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;