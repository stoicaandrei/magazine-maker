import React, { useContext, useState, useEffect } from 'react';

import { MagazineContext } from 'contexts';

const PageSelector: React.FC = () => {
  const [inputPage, setInputPage] = useState<number | ''>();
  const { currentMagazine, currentPage, jumpToPage } = useContext(MagazineContext);

  const pageCount = currentMagazine?.pageUrls.length || 1;
  const lastPage = pageCount - 1;

  useEffect(() => setInputPage(currentPage), [setInputPage, currentPage]);

  return (
    <div className="page-selector-container">
      <input
        className="page-input"
        type="text"
        value={inputPage}
        onChange={(e) => {
          if (!e.target.value) return setInputPage('');

          const page = parseInt(e.target.value) || undefined;
          if (typeof page === 'undefined') return;

          jumpToPage(page);
        }}
      />
      {` / ${lastPage}`}
    </div>
  );
};

export default PageSelector;
