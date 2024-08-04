import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { CatalogSidebar } from './CatalogSidebar/CatalogSidebar';
import { CatalogContent } from './CatalogContent/CatalogContent';
import { PageSectionWrapper } from '@/components/PageSectionWrapper/PageSectionWrapper';
import { IsLoading } from '@/components/IsLoading/IsLoading';
import {
  BACKEND_CATEGORIES_PRODUCTS_URL,
  BACKEND_BESTSELLERS_URL,
  BACKEND_SALE_URL,
  MESSAGES,
} from '@/constants';
import {
  getUniqueCategories,
  getUniqueRooms,
  getUniqueManufacturers,
  getUniqueCollections,
  getUniqueColors,
  getUniqueLength,
  getUniqueWidth,
  getUniqueHeight,
  getUniqueAvailability,
  getUniquePrice,
} from '@/store/slices/catalogSlice';

export const Catalog = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search.searchResults);
  const [isLoading, setIsLoading] = useState(false);

  const [sectionTitle, setSectionTitle] = useState<string>();
  const [properBreadcrumbs, setProperBreadcrumbs] = useState([]);

  const [properState, setProperState] = useState([]);

  const handleFetchData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Помилка отримання данних по продукту: ', error);
      return null;
    }
  };

  const fetchAndApplyCatalogData = async (
    url: string,
    title: string,
    breadcrumbs: string[],
  ) => {
    setIsLoading(true);

    const result = await handleFetchData(url);
    setSectionTitle(title);
    setProperBreadcrumbs(breadcrumbs);

    if (breadcrumbs.length === 0 || title === '') {
      setSectionTitle(result[0]?.item_category);
      setProperBreadcrumbs([result[0]?.room, result[0]?.item_category]);
    }

    setProperState(result);

    setIsLoading(false);
  };

  useEffect(() => {
    if (id === 'sale') {
      fetchAndApplyCatalogData(BACKEND_SALE_URL, 'Розпродаж', ['Розпродаж']);
    } else if (id === 'bestsellers') {
      fetchAndApplyCatalogData(BACKEND_BESTSELLERS_URL, 'Бестселлери', [
        'Бестселлери',
      ]);
    } else if (pathname.includes('/search')) {
      setSectionTitle('Результати пошуку');
      setProperState(search);
    } else {
      fetchAndApplyCatalogData(
        `${BACKEND_CATEGORIES_PRODUCTS_URL}${+id + 1}`,
        '',
        [],
      );
    }
    // eslint-disable-next-line
  }, [id, pathname, dispatch, search]);

  useEffect(() => {
    dispatch(getUniqueCategories(properState));
    dispatch(getUniqueRooms(properState));
    dispatch(getUniqueManufacturers(properState));
    dispatch(getUniqueCollections(properState));
    dispatch(getUniqueColors(properState));
    dispatch(getUniqueLength(properState));
    dispatch(getUniqueWidth(properState));
    dispatch(getUniqueHeight(properState));
    dispatch(getUniqueAvailability(properState));
    dispatch(getUniquePrice(properState));
  }, [properState, dispatch]);
  return (
    <PageSectionWrapper
      title={sectionTitle}
      breadcrumbs={properBreadcrumbs}
      sort="show"
    >
      <div className="catalog">
        <CatalogSidebar />
        {isLoading ? (
          <IsLoading text={MESSAGES.DATA_IS_LOADING} />
        ) : (
          <CatalogContent data={properState} />
        )}
      </div>
    </PageSectionWrapper>
  );
};
