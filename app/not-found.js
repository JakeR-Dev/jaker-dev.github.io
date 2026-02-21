'use client';
import { usePageLoad } from '../utils/page-load-context';

export default function NotFound() {
  const { setCursorClass } = usePageLoad();

  const mouseEnter = () => {
    setCursorClass('link');
  };
  const mouseLeave = () => {
    setCursorClass('enter');
  };

  return (
    <div className="flex load-1 flex-col flex-nowrap justify-center items-start size-full">
      <h2 className="color-cream">404</h2>
      <h3 className="color-cream">Oops, try again.</h3>
      <a className="btn mt-4" href="/" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Go Home</span></a>
    </div>
  );
}