import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <h2>
        My GitHub -{' '}
        <a
          href="https://github.com/ShatterPlayer"
          target="_blank"
          rel="noopener noreferrer"
        >
          ShatterPlayer
        </a>
      </h2>
    </Layout>
  );
};

export default ContactPage;
