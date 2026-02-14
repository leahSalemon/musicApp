import { useState } from 'react';
import { Artist } from '../types/interfaces';
import { fetchArtistsByName } from '../api/musicServices';
import SearchInput from './searchInput';
import ArtistCard from './artistCard';
import './searchComp.css';

const SearchComp = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (term: string) => {
    setLoading(true);
    try {
      const data = await fetchArtistsByName(term);
      setArtists(data || []);
    }
    catch (error) {
      console.error("Error fetching artists:", error);
    } 
    finally {
      setLoading(false);
    }
  };

  const displayArtists = () => {
    return artists.length > 0 ? (
      artists.map(artist => <ArtistCard key={artist.id} artist={artist} />)
    ) : (
      !loading && <p>No results found yet.</p>
    );
  };

  return (
    <div className="search-comp">
      <h1>Music Search</h1>
    
      <SearchInput onSearch={handleSearch} loadingSearch={loading} />

      {loading && <p>Searching...</p>}

      <div className="artist-results">
        {displayArtists()}
      </div>
    </div>
  );
};

export default SearchComp;