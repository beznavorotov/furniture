import { CatalogSidebar } from './CatalogSidebar/CatalogSidebar';
import { PageSectionWrapper } from '../../components/PageSectionWrapper/PageSectionWrapper';
import { CatalogContent } from './CatalogContent/CatalogContent';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { fetchCategory } from '../../store/slices/catalogSlice';

export const Catalog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const category = useSelector((state: RootState) => state.catalog.category);

  useEffect(() => {
    if (id) {
      dispatch(fetchCategory(+id + 1));
    }
  }, [id, dispatch]);

  return (
    <PageSectionWrapper title={category[+id]?.item_category}>
      <div className="catalog">
        <CatalogSidebar />
        <CatalogContent />
      </div>
    </PageSectionWrapper>
  );
};
