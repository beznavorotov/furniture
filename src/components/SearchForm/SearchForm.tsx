import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '@/store/slices/searchSlice';
import { UserActionsNav } from '@/components/UserActionsNav/UserActionsNav';
import { Search } from 'lucide-react';

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Введіть коректний пошуковий запит');
    } else {
      dispatch(fetchSearch(searchQuery));
      navigate(`/catalog/search?query=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <div className="header__search">
      <form
        className="d-flex form--search"
        role="search"
        onSubmit={handleSearch}
      >
        <label className="input-group" htmlFor="searchInput">
          <input
            className="form-control"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Пошук"
            aria-label="Пошук"
            aria-describedby="button-addon2"
          />
          <button className="button__search" type="submit" id="button-addon2">
            <Search strokeWidth={1} size={16} color="#757575" />
          </button>
        </label>
      </form>
      <UserActionsNav />
    </div>
  );
};
