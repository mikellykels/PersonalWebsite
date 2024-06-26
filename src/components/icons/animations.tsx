import React, { useEffect, createRef } from 'react';

import lottie from 'lottie-web';

interface Props {
  animation: string;
  height?: number;
  width?: number;
  loop?: boolean;
  autoplay?: boolean;
}

export const Animations: React.FC<Props> = ({
  animation,
  height = 150,
  width = 150,
  loop = false,
  autoplay = true,
}) => {
  const animationContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop,
      autoplay,
      animationData: animation,
    });
    return () => anim.destroy();
  }, []);

  return (
    <div style={{ marginTop: 20, marginBottom: 20, height, width }} ref={animationContainer} />
  );
};
