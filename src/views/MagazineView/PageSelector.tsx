import React, { useState, useContext, useEffect } from 'react';

import { MagazineContext } from 'contexts';

const PageSelector: React.FC = () => {
  const { currentMagazine, currentPage, jumpToPage } = useContext(MagazineContext);

  const [inputPage, setInputPage] = useState(0);

  useEffect(() => setInputPage(currentPage), [setInputPage, currentPage]);

  const pageCount = currentMagazine?.pageUrls.length || 1;
  const lastPage = pageCount - 1;

  return (
    <div className="page-selector-container">
      <input
        className="page-input"
        type="text"
        value={inputPage}
        onChange={(e) => {
          const page = parseInt(e.target.value);
          setInputPage(page);

          if (page) jumpToPage(page);
        }}
      />
      {` / ${lastPage}`}
    </div>
  );
};

export default PageSelector;
