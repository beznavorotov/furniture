import { useState } from 'react';
import { BACKEND_SEARCH } from '../../constants';
import ProductCard from '../ProductCard/ProductCard';

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Усі категорії');
  const [searchInDescription, setSearchInDescription] = useState(false);
  const [searchInSubcategories, setSearchInSubcategories] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const categories = [
    'Усі категорії',
    'назва товару',
    'артикул товару',
    'слова в описі товару',
    'назва категорії',
    'назва кімнати',
    'назва колекції',
    'назва виробника',
  ];

  const handleSearch = async () => {
    const query = `${BACKEND_SEARCH}?search=${searchQuery}`;

    try {
      const response = await fetch(query);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="search-page">
      <div className="search-form">
        <div className="search_input">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Що ти шукаєш?"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              checked={searchInDescription}
              onChange={(e) => setSearchInDescription(e.target.checked)}
            />
            Шукати в описі товарів
          </label>
          <label>
            <input
              type="checkbox"
              checked={searchInSubcategories}
              onChange={(e) => setSearchInSubcategories(e.target.checked)}
            />
            Пошук у підкатегоріях
          </label>
        </div>
        <button className="button" onClick={handleSearch}>
          Пошук
        </button>
      </div>

      <div className="search-results">
        {searchResults.length === 0 ? (
          <p>Немає товарів, які відповідають критеріям пошуку.</p>
        ) : (
          <div className="results-row">
            {searchResults.map((item) => (
              <ProductCard
                key={item.id}
                img={item.photo[0]}
                name={item.title}
                price={item.price}
                discountPrice={item.discount}
                cardSize="medium"
                // rating={null}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
