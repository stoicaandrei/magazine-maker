import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MagazineContext } from 'contexts';

const MagazineView: React.FC = () => {
  const { magazineId } = useParams() as { magazineId: string };
  const { currentMagazine, selectMagazine } = useContext(MagazineContext);

  useEffect(() => selectMagazine(magazineId), [magazineId]);

  return <p>{JSON.stringify(currentMagazine || {})}</p>;
};

export default MagazineView;
