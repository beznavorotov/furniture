import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

export const PageSectionWrapper = ({ title, breadcrumbs, children }) => {
  return (
    <section className="page-section container">
      <header className="page-section__header">
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        {title !== '' ? (
          <div className="page-section__heading">
            <h1 className="page-section--title">{title}</h1>
          </div>
        ) : null}
      </header>

      {children}
    </section>
  );
};
