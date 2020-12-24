import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Image, Spin } from 'antd';

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

  const pageUrl = currentMagazine.pageUrls[currentPage];

  return (
    <div className="magazine-container" style={backgroundStyle}>
      <Image preview={false} className="page" src={pageUrl} alt="page" placeholder={<Spin />} />
      <Navigation />
    </div>
  );
};

export default MagazineView;
