'use client';
import { PageLoadProvider } from '../../../utils/page-load-context';

export default function Root({children}) {
  return (
    <html lang="en">
      <PageLoadProvider>
        {children}
      </PageLoadProvider>
    </html>
  );
}