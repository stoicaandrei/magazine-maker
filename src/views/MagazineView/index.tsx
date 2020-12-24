import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MagazineContext } from 'contexts';

const MagazineView: React.FC = () => {
  const { magazineId } = useParams() as { magazineId: string };
  const { currentMagazine, selectMagazine } = useContext(MagazineContext);

  useEffect(() => selectMagazine(magazineId), [magazineId]);

  if (!currentMagazine) return <p>magazine not found :(</p>;

  console.log(currentMagazine);

  const backgroundStyle = {
    backgroundImage: `url(${currentMagazine.backgroundUrl})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="magazine-container" style={backgroundStyle}>
      {currentMagazine.title}
    </div>
  );
};

export default MagazineView;
