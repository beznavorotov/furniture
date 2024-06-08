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
// порядок імпортів: 1. бібліотеки, 2. компоненти, 3. стилі

const useQuery = () => {
  // то useQuery чи URLSearchParams ???? Якщо це кастомний хук, його слід винести з цього файлу, назва дивна.
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

  // як це попало на git ?
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

  // три useEffect в одному компоненті - це погана практика, краще розділити на окремі компоненти

  return (
    <PageSectionWrapper
      title={
        // search - це магічне значення, краще винести в константу
        pathname.includes('search')
          // Результати пошуку - це магічне значення, краще винести в константу
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
