import React from 'react';
import ContentLoader from 'react-content-loader';

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={1120}
      height={135}
      viewBox="0 0 1120 135"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="15" y="15" rx="0" ry="0" width="200" height="105" />
      <rect x="268" y="50" rx="0" ry="0" width="270" height="18" />
      <rect x="268" y="70" rx="0" ry="0" width="270" height="18" />
      <rect x="268" y="30" rx="0" ry="0" width="270" height="18" />
      <rect x="585" y="20" rx="0" ry="0" width="137" height="20" />
      <rect x="585" y="50" rx="0" ry="0" width="137" height="20" />
      <rect x="585" y="80" rx="0" ry="0" width="137" height="20" />
      <rect x="785" y="55" rx="0" ry="0" width="172" height="30" />
      <rect x="1005" y="40" rx="0" ry="0" width="195" height="50" />
    </ContentLoader>
  );
}

export { Skeleton };
