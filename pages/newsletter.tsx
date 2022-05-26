import React from 'react';
import Layout from '../components/Layout';

export const Newsletter = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'Newsletter - Ioav Livneh',
      }}
    >
          <div className='outer'>
              <div className="left">
                  <h1>“Either write something worth reading or do something worth writing.” <span>– Ben Franklin</span></h1>
                  <br />
                  <h2>On the 1st of each month, I send out a short <a href="https://ioav.substack.com/">newsletter</a> with a photo, quote, reflection on how I spent my time, and share anything I've written that I think is worth reading.
                  </h2>
                  <br />
              </div>
              <div className="right">
                <h1 className="big">🍏</h1>
                  <h2>Ioav's Month</h2>
                  <p>What's he been up to now?</p>
                  <iframe src="https://ioav.substack.com/embed" height="125" scrolling="no"></iframe>
              </div>
          </div>

    </Layout> 
  );
};

export default Newsletter;
