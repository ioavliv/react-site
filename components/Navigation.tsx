import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <h1 className="flex items-center justify-center">IOAV LIVNEH</h1>
      <Link href="/">
        <a className="text-gray-900 dark:text-white px-6 py-4">Writing</a>
      </Link>
      <Link href="/newsletter">
        <a className="text-gray-900 dark:text-white px-6 py-4">Newsletter</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
      </Link>
    </nav>
  );
};

export default Navigation;
