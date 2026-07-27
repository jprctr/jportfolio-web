'use client';

import { useEffect, useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

const cellSize = 100;

export default function CellCanvas() {
  const [rows, setRows] = useState<number[]>([]);
  const [cols, setCols] = useState<number[]>([]);

  useEffect(() => {
    const resizeHandle = debounce(() => {
      const { innerWidth, innerHeight } = window;
      const rowCells = Math.floor(innerHeight / cellSize);
      const colCells = Math.floor(innerWidth / cellSize);
      setRows(new Array(rowCells).fill(0).map((_, i) => i));
      setCols(new Array(colCells).fill(0).map((_, i) => i));
    }, 100);
    resizeHandle();
    window.addEventListener('resize', resizeHandle);
    return () => window.removeEventListener('resize', resizeHandle);
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
  }, [rows.length, cols.length]);

  return (rows.length > 0 && cols.length) && (
    <div
      className={`
        fixed top-0 bottom-0 left-0 right-0 
        grid grid-flow-rows 
        pointer-events-none
      `}
      style={{
        gridTemplateRows: `repeat(${rows.length}, 1fr)`,
        gridTemplateColumns: `repeat(${cols.length}, 1fr)`,
      }}
    >
      {cells}
    </div>
  );
}
