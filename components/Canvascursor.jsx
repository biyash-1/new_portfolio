'use client';
2
import useCanvasCursor from '../app/hooks/use-canvasCursor';
3
const CanvasCursor = () => {
4
  useCanvasCursor();
5
  return <canvas className="pointer-events-none fixed inset-0" id="canvas" />;
6
};
7
export default CanvasCursor;