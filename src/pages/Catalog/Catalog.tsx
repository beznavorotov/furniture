import { CatalogSidebar } from './CatalogSidebar/CatalogSidebar';
import { PageSectionWrapper } from '../../components/PageSectionWrapper/PageSectionWrapper';
import { CatalogContent } from './CatalogContent/CatalogContent';

export const Catalog = () => {
  return (
    <PageSectionWrapper title="Наш рожевий каталог">
      <div className="catalog">
        <CatalogSidebar />
        <CatalogContent />
      </div>
    </PageSectionWrapper>
  );
};
