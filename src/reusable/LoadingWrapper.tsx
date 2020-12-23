import React, { useContext } from 'react';

import { MagazineContext } from 'contexts';

const LoadingWrapper: React.FC = ({ children }) => {
  const { fetching } = useContext(MagazineContext);

  if (fetching) return <p>loading...</p>;

  return <div className="loading-wrapper">{children}</div>;
};

export default LoadingWrapper;
