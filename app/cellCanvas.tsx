'use client';

import { useEffect, useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

const cellSize = 100;

export default function CellCanvas() {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [rows, setRows] = useState<number[]>([]);
  const [cols, setCols] = useState<number[]>([]);

  useEffect(() => {
    setHydrated(true);
    const calculateSize = () => {
      const width = document.documentElement.clientWidth || window.innerWidth;
      const height = document.documentElement.clientHeight || window.innerHeight;
      if (!width || !height) return;
      const rowCells = Math.floor(height / cellSize);
      const colCells = Math.floor(width / cellSize);
      setRows(Array.from({ length: rowCells }, (_, i) => i));
      setCols(Array.from({ length: colCells }, (_, i) => i));
    }
    const resizeHandle = debounce(calculateSize, 100);
    requestAnimationFrame(calculateSize);
    window.addEventListener('resize', resizeHandle);
    return () => {
      window.removeEventListener('resize', resizeHandle);
      resizeHandle.cancel();
    };
  }, []);

  const cells = useMemo(() => {
    return (
      rows.map(x => (
        cols.map(y => (
          <div
            key={`${x}-${y}-${rows.length}-${cols.length}`}
            className='col-span-1 text-center bg-white animateCell'
            style={{ animationDelay: `${(x + y) * 100}ms` }}
          />
        ))
      ))
    );
  }, [hydrated, rows.length, cols.length]);

  return hydrated ? (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 grid grid-flow-rows pointer-events-none`}
      style={{
        gridTemplateRows: `repeat(${rows.length}, 1fr)`,
        gridTemplateColumns: `repeat(${cols.length}, 1fr)`,
      }}
    >
      {cells}
    </div>
  ) : null;
}
