import React, { useState } from 'react';
import Layout from '../components/Layout';

export const About = (props): JSX.Element => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <Layout
      customMeta={{
        title: 'About - Ioav Livneh',
      }}
    >
      <div className='outer'>
        <div className='magritte'>
          <img src="images/avatar.png" id="big" />
          <span id="small"
      onClick={toggleClass}>
            {isActive ? '🍎': '🍏'} 
          </span>           
        </div>

        <div className='about'>
          <h1 className='italics'>Ceci n'est pas Ioav</h1>
          <h2>This is not Ioav. This is a website made by Ioav Livneh where he shares useful or interesting ideas for anyone to read and hopefully enjoy. The idea behind this page is inspired by Magritte's artwork and philosophy. You can read more about it on <a href="/posts/ceci-nest-pas-une-blogpost#the-online-persona">this blogpost</a>.</h2>
          {/* <h2>This is not Ioav. This is a website about Ioav Livneh where he keeps stories, ideas, and random musings for anyone to read and hopefully enjoy. The idea behind this page is inspired by Magritte's artwork and philosophy. You can read more about it on <a href="/posts/ceci-nest-pas-un-blogpost">this blogpost</a>.</h2> */}
          <p>ioav@substack.com</p>
        </div>
      </div>


    </Layout>
  );
};

export default About;
