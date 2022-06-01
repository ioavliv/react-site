import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';

type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      {/* <div className='outer'>
        <div className="left">
          <p>As I learned from my high school [English literature teacher](/posts/teacher), the word "essay" comes from the French meaning “to attempt”. I decided to write a series of essays to live on my website to serve as my personal statements and opinions on topics that are dear to me. They interest me/call to me. I am drawn to them. All my thoughts on a subject. I just want to write about the things I care about and attribute where I got inspiration from and who I learned from and what books I read. If you already know about these, you are unlikely to learn anything new from me. I just want to share my influences and what shapes my worldview.
          </p>
          <p>
            These essays are *attempts* to straighten out my thoughts on particular subjects that interest me and on another level, these essays are *attempts* to improve my writing ability and quality to produce something worth reading.
            I want to concretize my ideas on a number of subjects and I want to be able to communicate those ideas effectively.
          </p>
          <p>Why did I spend all this time writing all my thoughts on a subject and uploading them publicly online? 1) because writing is how I discover what my thoughts are about a topic 2) maybe youre curious to know my thoughts and we can chat about it and be friends 😊 (lead to good conversations)</p>

          <p>I'm not on any social platforms, if you want to stay up-to-date on what I'm doing, join my mom and grandma on this monthly mailing list where I share one photo, quote, and a summary of my week.</p>
        </div>
        <div className="right">
          <iframe src="https://ioav.substack.com/embed" width="480" height="320" scrolling="no"></iframe>
        </div>
      </div> */}

      <div className="outer blog-row">
        {posts.map((post) => (
          <article key={post.slug} className="mt-12 w-4/12 px-4">
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
              {format(parseISO(post.date), 'MMMM d, yyyy')}
            </p>
            <h1 className="mb-2 text-xl">
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">
                  {post.title}
                </a>
              </Link>
            </h1>
            <p className="mb-3">{post.description}</p>
            <p>
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                <a>Read More</a>
              </Link>
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
