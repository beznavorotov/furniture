export const CatalogSidebar = () => {
  return (
    <aside className="catalog-sidebar">
      {/* Ціна */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Ціна</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__input-range">
            <input
              type="range"
              name="priceRange"
              id="price"
              min="0"
              max="100000"
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minPrice"
                id="minPrice"
                placeholder="0"
              />
              <input
                type="number"
                name="maxPrice"
                id="maxPrice"
                placeholder="100000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Категорії */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Категорії</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            <label>
              <input type="checkbox" name="chbox-material" />
              Дивани
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Крісла
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Столи
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Тумби
            </label>
          </div>
        </div>
      </div>

      {/* Матеріал */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Матеріал</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            <label>
              <input type="checkbox" name="chbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Ясен Шімо світлий
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Ясен Шімо світлий
            </label>
          </div>
        </div>
      </div>

      {/* Наявність */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Наявність</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            <label>
              <input type="checkbox" name="chbox-material" />В наявності
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Відсутні
            </label>
          </div>
        </div>
      </div>

      {/* Колекції */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Колекції</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            <label>
              <input type="checkbox" name="chbox-material" />
              Модерн Класика
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Скандинавська Затишність
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Лофт Престиж
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Сонячний Інтер'єр
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Елегантний Мінімалізм
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Природна Гармонія
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Ретро Шарм
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Комфортний Урбан
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Гламурна Вишуканість
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Містечкова Ідилія
            </label>
          </div>
        </div>
      </div>

      {/* Виробник */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Виробник</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            <label>
              <input type="checkbox" name="chbox-material" />
              Меблі Майстер
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Дизайн Комфорт
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Еко Дім
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Вишуканий Інтер'єр
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Модерн Арт
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Затишок Престиж
            </label>
            <label>
              <input type="checkbox" name="chbox-material" />
              Фабрика Зручності
            </label>
          </div>
        </div>
      </div>

      {/* Довжина */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Довжина</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__input-range">
            <input
              type="range"
              name="priceRange"
              id="price"
              min="0"
              max="100000"
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minLength"
                id="minLength"
                placeholder="0"
              />
              <input
                type="number"
                name="maxLength"
                id="maxLength"
                placeholder="100000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Ширина */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Ширина</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__input-range">
            <input
              type="range"
              name="priceRange"
              id="price"
              min="0"
              max="100000"
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minWidth"
                id="minWidth"
                placeholder="0"
              />
              <input
                type="number"
                name="maxWidth"
                id="maxWidth"
                placeholder="100000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Висота */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Висота</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__input-range">
            <input
              type="range"
              name="priceRange"
              id="price"
              min="0"
              max="100000"
            />
            <div className="filter__input-wrapper">
              <input
                type="number"
                name="minHeight"
                id="minHeight"
                placeholder="0"
              />
              <input
                type="number"
                name="maxHeight"
                id="maxHeight"
                placeholder="100000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Захист від кігтів */}
      <div className="catalog-sidebar__section">
        <div className="catalog-sidebar__heading">
          <h4 className="catalog-sidebar__title">Захист від кігтів</h4>
        </div>
        <div className="catalog-sidebar__content">
          <div className="filter filter__check-list">
            <label>
              <input type="checkbox" name="chbox-material" />
              Присутній
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};
