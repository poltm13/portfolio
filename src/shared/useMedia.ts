import { useEffect, useState } from 'react';

export default function useMedia(): number[] {
  const queries = ['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 480px)', '(max-width: 479.98px)'];
  const columns = [5, 4, 3, 3];
  const heights = [90, 90, 90, 60];

  const defaultValue: number[] = [columns[columns.length - 1], heights[heights.length - 1]];
  const match = () => {
    const i = queries.findIndex(q => matchMedia(q).matches);
    return [columns[i] || defaultValue[0], heights[i] || defaultValue[1]];
  };
  const [value, set] = useState<number[]>(match);
  
  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return value;
}
