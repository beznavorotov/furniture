import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { CatalogSidebar } from './CatalogSidebar/CatalogSidebar';
import { CatalogContent } from './CatalogContent/CatalogContent';
import { PageSectionWrapper } from '@/components/PageSectionWrapper/PageSectionWrapper';
import { fetchCategory } from '@/store/slices/catalogSlice';
import {
  getUniqueCategories,
  getUniqueRooms,
  getUniqueManufacturers,
  getUniqueCollections,
  getUniqueColors,
} from '@/store/slices/filterCatalogSlice';

export const Catalog = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.catalog.category);
  const search = useSelector((state: RootState) => state.search.searchResults);

  const [properState, setProperState] = useState([]);
  const [properCardType, setProperCardType] = useState('');

  useEffect(() => {
    if (id !== 'search') {
      dispatch(fetchCategory(+id + 1));
    }
  }, [id, dispatch]);

  useEffect(() => {
    pathname.includes('/search')
      ? (setProperState(search), setProperCardType('search'))
      : (setProperState(category), setProperCardType('category'));
  }, [pathname, search, category]);

  useEffect(() => {
    dispatch(getUniqueCategories(properState));
    dispatch(getUniqueRooms(properState));
    dispatch(getUniqueManufacturers(properState));
    dispatch(getUniqueCollections(properState));
    dispatch(getUniqueColors(properState));
  }, [properState, dispatch]);

  return (
    <PageSectionWrapper
      title={
        pathname.includes('search')
          ? 'Результати пошуку'
          : category[+id]?.item_category
      }
      breadcrumbs={[category[+id]?.room, category[+id]?.item_category]}
    >
      <div className="catalog">
        <CatalogSidebar />
        <CatalogContent data={properState} type={properCardType} />
      </div>
    </PageSectionWrapper>
  );
};
