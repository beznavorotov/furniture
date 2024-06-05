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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(25);

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
    if (searchQuery.trim() === '') {
      setSearchResults([]); // Clear search results if query is empty
      return;
    }

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
      setCurrentPage(1); // Reset to first page on new search
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
        {currentItems.length === 0 ? (
          <p>Немає товарів, які відповідають критеріям пошуку.</p>
        ) : (
          <div className="results-row">
            {currentItems.map((item) => (
              <ProductCard
<<<<<<< HEAD
              key={item.id}
              name={item.title}
              price={item.price}
              discountPrice={item.price}
              img={item.photo.find((item) => item.includes('photo_image_0'))}
              cardSize={null}
              id={item.article_code}
              stateType="search"
              rating={item.review}
=======
                key={item.id}
                name={item.title}
                price={item.price}
                discountPrice={item.price}
                img={item.photo.find((item) => item.includes('photo_image_0'))}
                cardSize={null}
                id={item.article_code}
                stateType="search"
                rating={item.review}
>>>>>>> 03272815c360adbb0fbad87f2366c65f0a5b80bd
              />
            ))}
          </div>
        )}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Попередня
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Наступна
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
