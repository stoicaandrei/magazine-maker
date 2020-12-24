import React, { useContext } from 'react';

import { MagazineContext } from 'contexts';

const PageSelector: React.FC = () => {
  const { currentMagazine, currentPage, jumpToPage } = useContext(MagazineContext);

  const pageCount = currentMagazine?.pageUrls.length || 1;
  const lastPage = pageCount - 1;

  return (
    <div className="page-selector-container">
      <input
        className="page-input"
        type="text"
        value={currentPage}
        onChange={(e) => {
          const page = parseInt(e.target.value) || 0;
          jumpToPage(page);
        }}
      />
      {` / ${lastPage}`}
    </div>
  );
};

export default PageSelector;
