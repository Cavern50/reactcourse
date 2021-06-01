import React from "react";
import ContentLoader from "react-content-loader";

const LoadingBlock = () => (
  <ContentLoader
  className='pizza-block'
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="401" y="102" rx="3" ry="3" width="178" height="6" />
    <circle cx="135" cy="124" r="120" />
    <rect x="0" y="264" rx="3" ry="3" width="280" height="26" />
    <rect x="4" y="419" rx="3" ry="3" width="80" height="25" />
    <rect x="0" y="307" rx="0" ry="0" width="280" height="84" />
    <rect x="130" y="412" rx="15" ry="15" width="150" height="38" />
  </ContentLoader>
);

export default LoadingBlock;
