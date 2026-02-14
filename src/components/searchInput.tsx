import React, { useEffect, useRef, useState, memo } from 'react';
import './searchInput.css';

interface SearchInputProps {
  onSearch: (term: string) => void;
  loadingSearch: boolean;
  initialSearchTerm?: string;
}

const SearchInput = memo((props: SearchInputProps) => {
  const { onSearch, loadingSearch, initialSearchTerm } = props;
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const lastSearchedRef = useRef(initialSearchTerm);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (lastSearchedRef.current === searchTerm) {
      return;
    }
    lastSearchedRef.current = searchTerm;
    if (!searchTerm.trim()) return;
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-input">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for artists..."
        ref={inputRef}
      />
      <button type="submit" disabled={!searchTerm.trim() || loadingSearch }>
        {loadingSearch ? <span className="spinner-small"></span> : 'Search'}</button>
    </form>
  );
});

export default SearchInput;