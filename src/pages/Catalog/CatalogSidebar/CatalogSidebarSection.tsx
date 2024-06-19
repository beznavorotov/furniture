import { useState } from 'react';

export const CatalogSidebarSection = ({ type, title, children }) => {
  const [hideFilters, setHideFilters] = useState(false);

  const handleHeadingClick = () => {
    setHideFilters((prevState) => !prevState);
  };

  return (
    <div
      className={`catalog-sidebar__section ${
        type.length <= 1 && type !== '' ? 'hide' : ''
      }`}
    >
      <div
        className={`catalog-sidebar__heading ${hideFilters ? 'hide' : 'show'}`}
        onClick={handleHeadingClick}
      >
        <h4 className="catalog-sidebar__title">{title}</h4>
        <span className="catalog-sidebar__icon">{hideFilters ? '+' : '-'}</span>
      </div>
      <div
        className={`catalog-sidebar__content ${hideFilters ? 'hide' : 'show'}`}
      >
        {children}
      </div>
    </div>
  );
};
