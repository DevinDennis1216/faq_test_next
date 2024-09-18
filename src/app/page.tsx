'use client';

import * as React from 'react';

import Accordion from '@/components/Accordion';
import faqs from '@/constant/faqs.json';
import '@/lib/env';

interface IFAQ {
  Q: string;
  A: string;
  T: string;
}

export default function HomePage() {
  return (
    <main className='py-16 w-screen'>
      <div className='mx-auto container'>
        <h1 className='pl-4 text-5xl'>FAQs</h1>
      <div className='mt-2 flex flex-col gap-y-2'>
      {
        faqs.map((faq: IFAQ, index: number) => <Accordion key={index} title={faq.Q} description={faq.A} badge={faq.T} />)
      }
      </div>
      </div>
    </main>
  );
}
