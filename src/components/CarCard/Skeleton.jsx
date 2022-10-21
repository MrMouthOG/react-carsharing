import React from 'react';
import ContentLoader from 'react-content-loader';

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={1112}
      height={135}
      viewBox="0 0 1112 135"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="15" y="15" rx="0" ry="0" width="200" height="105" />
      <rect x="268" y="50" rx="0" ry="0" width="270" height="18" />
      <rect x="268" y="70" rx="0" ry="0" width="270" height="18" />
      <rect x="268" y="30" rx="0" ry="0" width="270" height="18" />
      <rect x="560" y="25" rx="0" ry="0" width="137" height="20" />
      <rect x="560" y="50" rx="0" ry="0" width="137" height="20" />
      <rect x="560" y="75" rx="0" ry="0" width="137" height="20" />
      <rect x="740" y="45" rx="0" ry="0" width="172" height="30" />
      <rect x="950" y="40" rx="0" ry="0" width="150" height="50" />
    </ContentLoader>
  );
}

export { Skeleton };
