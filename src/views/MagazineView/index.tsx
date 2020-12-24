import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MagazineContext } from 'contexts';

import Navigation from './Navigation';

const MagazineView: React.FC = () => {
  const { magazineId } = useParams() as { magazineId: string };
  const { currentMagazine, currentPage, selectMagazine } = useContext(MagazineContext);

  useEffect(() => selectMagazine(magazineId), [magazineId]);

  if (!currentMagazine) return <p>magazine not found :(</p>;

  const backgroundStyle = {
    backgroundImage: `url(${currentMagazine.backgroundUrl})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="magazine-container" style={backgroundStyle}>
      <img className="page" src={currentMagazine.pageUrls[currentPage]} alt="page" />
      <Navigation />
    </div>
  );
};

export default MagazineView;
