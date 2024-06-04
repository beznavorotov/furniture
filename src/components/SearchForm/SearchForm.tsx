import { useState } from 'react';
import { UserActionsNav } from '../UserActionsNav/UserActionsNav';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../../store/slices/searchSlice';

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0667 14L8.86667 9.8C8.53333 10.0667 8.15 10.2778 7.71667 10.4333C7.28333 10.5889 6.82222 10.6667 6.33333 10.6667C5.12222 10.6667 4.09733 10.2471 3.25867 9.408C2.42 8.56889 2.00044 7.544 2 6.33333C1.99956 5.12267 2.41911 4.09778 3.25867 3.25867C4.09822 2.41956 5.12311 2 6.33333 2C7.54356 2 8.56867 2.41956 9.40867 3.25867C10.2487 4.09778 10.668 5.12267 10.6667 6.33333C10.6667 6.82222 10.5889 7.28333 10.4333 7.71667C10.2778 8.15 10.0667 8.53333 9.8 8.86667L14 13.0667L13.0667 14ZM6.33333 9.33333C7.16667 9.33333 7.87511 9.04178 8.45867 8.45867C9.04222 7.87556 9.33378 7.16711 9.33333 6.33333C9.33289 5.49956 9.04133 4.79133 8.45867 4.20867C7.876 3.626 7.16756 3.33422 6.33333 3.33333C5.49911 3.33244 4.79089 3.62422 4.20867 4.20867C3.62644 4.79311 3.33467 5.50133 3.33333 6.33333C3.332 7.16533 3.62378 7.87378 4.20867 8.45867C4.79356 9.04356 5.50178 9.33511 6.33333 9.33333Z"
                fill="#757575"
              />
            </svg>
          </button>
        </label>
      </form>
      <UserActionsNav />
    </div>
  );
};
