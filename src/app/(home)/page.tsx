'use client';

import Card from '@/components/items/Card';
import Link from 'next/link';

export default function Home() {
  const count = 6;
  return (
    <div className="mt-15">
      <div className="hero min-h-screen bg-[url(/hero.jpg)]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
      <div className="text-center my-10 container mx-auto">
        <h1 className="font-bold text-5xl mb-5">New Collection</h1>
        <p className="max-w-xl mx-auto text-gray-500 mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id facilis
          vero expedita excepturi fugiat dignissimos rem similique tempore
          eligendi voluptas!
        </p>
        <div className="grid grid-cols-3 gap-8">
          {Array.from({ length: count }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
        <div className="my-5">
          <button className="btn btn-neutral rounded-lg">
            <Link href={'/shop'}>Lihat Semua</Link>
          </button>
        </div>
      </div>

      <div className="text-center my-10 container mx-auto">
        <h1 className="font-bold text-5xl mb-5">Top Collection</h1>
        <p className="max-w-xl mx-auto text-gray-500 mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id facilis
          vero expedita excepturi fugiat dignissimos rem similique tempore
          eligendi voluptas!
        </p>
        <div className="grid grid-cols-3 gap-8">
          {Array.from({ length: count }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
        <div className="my-5">
          <button className="btn btn-neutral rounded-lg">
            <Link href={'/shop'}>Lihat Semua</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
