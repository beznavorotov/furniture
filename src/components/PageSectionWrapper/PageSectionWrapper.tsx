import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import { useDispatch } from 'react-redux';
import { setSortBy } from '@/store/slices/filterCatalogSlice';

export const PageSectionWrapper = ({ title, breadcrumbs, sort, children }) => {
  const dispatch = useDispatch();
  const optionsData = [
    { rating: 'За рейтингом' },
    { minMax: 'Від дешевих до дорогих' },
    { maxMin: 'Від дорогих до дешевих' },
  ];

  return (
    <section className="page-section container">
      <header className="page-section__header">
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        {title !== '' ? (
          <div className="page-section__heading">
            <h1 className="page-section--title">{title}</h1>

            {sort !== '' ? (
              <select
                className="select-sort"
                name="sortBy"
                id="select-sort"
                onChange={(e) => {
                  dispatch(setSortBy(e.target.value));
                }}
              >
                {optionsData.map((item) => (
                  <option key={crypto.randomUUID()} value={Object.keys(item)}>
                    {Object.values(item)}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
        ) : null}
      </header>

      {children}
    </section>
  );
};
