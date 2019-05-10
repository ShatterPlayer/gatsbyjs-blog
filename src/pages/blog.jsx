import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import Layout from '../components/layout';
import styles from '../styles/blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "DD-MM-YYYY")
            slug
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      {data.allContentfulBlogPost.edges.map((edge, i) => {
        return (
          <Link to={`/blog/${edge.node.slug}`}>
            <div className={styles.container}>
              <h2 className={styles.title}>{edge.node.title}</h2>
              <p className={styles.date}>{edge.node.publishedDate}</p>
            </div>
          </Link>
        );
      })}
    </Layout>
  );
};

export default BlogPage;
