import NProgress from 'nextjs-progressbar';

export function ProgressBar() {
  return (
    <NProgress
      color="#5762e0"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
  );
}
