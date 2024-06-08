import { SearchPage } from '../../components/SearchPage/SearchPage';
// імпорт scss стилів для кожної сторінки окремо, а не в одному файлі index.scss !

export const Search = () => {
  return (
    <div className="container">
      <h1>Пошук</h1>
      <SearchPage />
    </div>
  );
};

// SearchPage - це компонент з назвою  SearchPage ??? То компонент чи сторінка?
