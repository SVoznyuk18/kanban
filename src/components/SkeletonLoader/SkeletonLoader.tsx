'use client';

import { memo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { SkeletonWrapper } from "./SkeletonLoader.style";

const SkeletonLoader = ({ count, variants }: { count: number; variants: "task" | "board" | "column" }) => {
  return (
    <SkeletonWrapper variants={variants} >
      <Skeleton count={count} duration={2} highlightColor="#828FA3" />
    </SkeletonWrapper>
  )
}

export default memo(SkeletonLoader);
