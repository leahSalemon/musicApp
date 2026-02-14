import { useCallback, useState } from 'react';
import { Artist } from '../types/interfaces';
import { fetchArtistsByName } from '../api/musicServices';
import SearchInput from './searchInput';
import ArtistCard from './artistCard';
import { useFetch } from '../hooks/useFetch';
import './searchComp.css';

interface SearchCompProps {
  initialArtists: Artist[];
  onUpdateArtists: (artists: Artist[]) => void;
  lastSearch: string;
  onUpdateSearch: (term: string) => void;
}

const SearchComp = (props: SearchCompProps) => {
  const { initialArtists, lastSearch, onUpdateArtists, onUpdateSearch } = props;
  const { loading, error, execute: searchArtist } = useFetch< Artist [ ] , string >(fetchArtistsByName);
  const [wasSearched, setWasSearched] = useState<boolean>(initialArtists.length > 0);

  const handleSearch = useCallback(async (term: string): Promise<void> => {
    if (!term.trim()) return;
    try {
      const results = await searchArtist(term);
      setWasSearched(true);
      onUpdateArtists(results || []);
      onUpdateSearch(term);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  }, [searchArtist, onUpdateArtists, onUpdateSearch]);

  const displayNoResults = () => {
    if (wasSearched &&  !loading) {
      return <p>No results found yet.</p>;
    }
    return null;
  }

  const displayArtists = () => {
    return initialArtists?.map(artist => <ArtistCard key={artist.id} artist={artist} />);
  };

  const displayArtistResults = () => initialArtists && initialArtists.length > 0 ? displayArtists() : displayNoResults();

  return (
    <div className="search-comp">
      <h1>Music Search</h1>
      <SearchInput onSearch={handleSearch} loadingSearch={loading} initialSearchTerm={lastSearch} />
      { error && < p className="error-msg" > { error } </p> }
      <div className="artist-results">
        { displayArtistResults() }
      </div>
    </div>
  );
};

export default SearchComp;