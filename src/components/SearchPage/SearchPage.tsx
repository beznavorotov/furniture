import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BACKEND_SEARCH } from '../../constants';
import ProductCard from '../ProductCard/ProductCard';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const SearchPage = () => {
  const query = useQuery();
  const initialSearchQuery = query.get('query') || '';
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCategory, setSelectedCategory] = useState('назва товару');
  const [searchInDescription, setSearchInDescription] = useState(false);
  const [searchInSubcategories, setSearchInSubcategories] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (initialSearchQuery) {
      handleSearch();
    }
  }, [initialSearchQuery]);

  const categories = [
    'назва товару',
    'артикул товару',
    'слова в описі товару',
    'назва категорії',
    'назва кімнати',
    'назва колекції',
    'назва виробника',
  ];

  const handleSearch = async () => {
    let query = `${BACKEND_SEARCH}?search=${searchQuery}`;

    if (searchInDescription) {
      query += `,${searchQuery}`;
    }

    if (searchInSubcategories) {
      query += `&subcategories=true`;
    }

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
            placeholder="Пошук..."
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
                key={item.article_code}
                img={item.photo.find((item) => item.includes('photo_image_0'))}
                name={item.title}
                price={item.price}
                discountPrice={item.discount}
                cardSize="small"
                id={item.article_code}
                stateType="category"
                rating={item.review}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
