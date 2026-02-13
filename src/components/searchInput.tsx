import React, { useEffect, useRef, useState } from 'react';
import './searchInput.css';

interface SearchInputProps {
  onSearch: (term: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const { onSearch } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchInput;