import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';

import { MagazineContext } from '../contexts';

const PageTitle: React.FC = () => {
  const { currentMagazine, currentPage } = useContext(MagazineContext);

  let pageTitle = "Raspandacu'";
  if (currentMagazine) {
    const { title } = currentMagazine;
    const page = currentPage ? currentPage : 'Coperta';

    pageTitle = `${title}-${page} | ${pageTitle}`;
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
  );
};

export default PageTitle;
