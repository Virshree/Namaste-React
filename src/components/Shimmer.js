import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Shimmer = () => {
  return (
    <div className="">
      
      <SkeletonTheme>
      <Skeleton />
       <Skeleton  count={10} height={30} />
      </SkeletonTheme>
   
    </div>
  );
};

export default Shimmer;
