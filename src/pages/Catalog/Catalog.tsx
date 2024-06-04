import { CatalogSidebar } from './CatalogSidebar/CatalogSidebar';
import { PageSectionWrapper } from '../../components/PageSectionWrapper/PageSectionWrapper';
import { CatalogContent } from './CatalogContent/CatalogContent';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { fetchCategory } from '../../store/slices/catalogSlice';

export const Catalog = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const category = useSelector((state: RootState) => state.catalog.category);

  useEffect(() => {
    if (id !== 'search') {
      dispatch(fetchCategory(+id + 1));
    }
  }, [id, dispatch]);

  return (
    <PageSectionWrapper
      title={
        pathname.includes('search')
          ? 'Результати пошуку'
          : category[+id]?.item_category
      }
    >
      <div className="catalog">
        <CatalogSidebar />
        <CatalogContent />
      </div>
    </PageSectionWrapper>
  );
};
