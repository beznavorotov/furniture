import { CatalogSidebar } from './CatalogSidebar/CatalogSidebar';
import { PageSectionWrapper } from '../../components/PageSectionWrapper/PageSectionWrapper';
import { CatalogContent } from './CatalogContent/CatalogContent';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Catalog = () => {
  const rooms = useSelector((state: RootState) => state.rooms.items);
  const { id } = useParams();
  return (
    <PageSectionWrapper title={rooms[+id - 1].title}>
      <div className="catalog">
        <CatalogSidebar />
        <CatalogContent pageId={+id} />
      </div>
    </PageSectionWrapper>
  );
};
