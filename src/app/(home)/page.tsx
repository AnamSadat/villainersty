'use client';

import { Button, Hero, HeroContent } from '@/components';
import Card from '@/components/organism/items/Card';
import Link from 'next/link';

export default function Home() {
  const count = 6;
  return (
    <div className="mt-6">
      <Hero className=" min-h-screen bg-[url(/hero.jpg)]">
        <HeroContent className=" text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button className="rounded-lg" variant={'primary'}>
              Get Started
            </Button>
          </div>
        </HeroContent>
      </Hero>
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
          <Button className="rounded-lg" variant={'neutral'}>
            <Link href={'/shop'}>Lihat Semua</Link>
          </Button>
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
          <Button className=" rounded-lg" variant={'neutral'}>
            <Link href={'/shop'}>Lihat Semua</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
