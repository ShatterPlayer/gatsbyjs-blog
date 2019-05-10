import React from 'react';

import Layout from '../components/layout';

import styles from '../styles/404.module.scss';

const PageNotFound = () => {
  return (
    <Layout>
      <h1 className={styles.main}>404</h1>
      <h3>Page Not Found</h3>
    </Layout>
  );
};

export default PageNotFound;
