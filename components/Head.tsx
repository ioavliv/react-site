import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { MetaProps } from '../types/layout';

export const WEBSITE_HOST_URL = 'https://www.ioavlivneh.com';

const Head = ({ customMeta }: { customMeta?: MetaProps }): JSX.Element => {
  const router = useRouter();
  const meta: MetaProps = {
    title: 'Ioav Livneh',
    description: "Ceci n'est pas Ioav. This is not Ioav. This is a website made by Ioav Livneh where he shares useful or interesting ideas for anyone to read and hopefully enjoy.",
    image: `${WEBSITE_HOST_URL}/images/avatar.png`,
    type: 'website',
    ...customMeta,
  };

  return (
    <NextHead>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Ioav Livneh" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@huntarosan" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
<link href="https://fonts.googleapis.com/css2?family=Molle:ital@1&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet"></link>
    </NextHead>
  );
};

export default Head;
