import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from 'hooks';

import { MagazineContext } from 'contexts';

import Next from 'assets/images/next_white.png';
import Prev from 'assets/images/prev_white.png';

const MagazineView: React.FC = () => {
  const query = useQuery();
  const { magazineId } = useParams() as { magazineId: string };
  const { currentMagazine, selectMagazine } = useContext(MagazineContext);

  useEffect(() => selectMagazine(magazineId), [magazineId]);

  if (!currentMagazine) return <p>magazine not found :(</p>;

  const lastPage = currentMagazine.pageUrls.length;

  let page = parseInt(query.page) || 0;
  if (page < 0) page = 0;
  if (page > lastPage) page = lastPage;

  console.log(currentMagazine);

  const backgroundStyle = {
    backgroundImage: `url(${currentMagazine.backgroundUrl})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="magazine-container" style={backgroundStyle}>
      <img className="page" src={currentMagazine.pageUrls[page]} alt="page" />

      <div className="navigation-container">
        <img className="btn btn-prev hidden" src={Prev} alt="prev" />
        <img className="btn btn-next" src={Next} alt="next" />
      </div>
    </div>
  );
};

export default MagazineView;
