import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import '../styles/index.module.scss';

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello</h1>
      <h2>This is my first site made in GatsbyJs</h2>
    </Layout>
  );
};

export default HomePage;
