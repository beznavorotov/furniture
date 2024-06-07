import { CatalogSidebar } from './CatalogSidebar/CatalogSidebar';
import { PageSectionWrapper } from '../../components/PageSectionWrapper/PageSectionWrapper';
import { CatalogContent } from './CatalogContent/CatalogContent';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { fetchCategory } from '../../store/slices/catalogSlice';
import {
  getUniqueCategories,
  getUniqueRooms,
  getUniqueManufacturers,
  getUniqueCollections,
} from '../../store/slices/filterCatalogSlice';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const Catalog = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.catalog.category);
  const search = useSelector((state: RootState) => state.search.searchResults);

  const [properState, setProperState] = useState([]);
  const [properCardType, setProperCardType] = useState('');
  const query = useQuery();

  console.log('query: ', query.get('query'));
  console.log('id: ', id);
  console.log('pathname: ', pathname);

  useEffect(() => {
    if (id !== 'search') {
      console.log(id);
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
  }, [properState, dispatch]);

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
        <CatalogContent data={properState} type={properCardType} />
      </div>
    </PageSectionWrapper>
  );
};
