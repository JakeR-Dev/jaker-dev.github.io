'use client';
import { usePageLoad } from '../../../utils/page-load-context';
import './body.scss';

export default function BodyWrapper({ children, className }) {
  const { isLoaded, borderMe } = usePageLoad();

  return (
    <body className={`${className} ${isLoaded ? 'show-me' : ''} ${borderMe ? 'border-me' : ''}`}>
      {children}
    </body>
  );
}