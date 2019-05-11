import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD-MM-YYYY")
      body {
        json
      }
    }
    allContentfulAsset {
      edges {
        node {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

const BlogPost = ({ data }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const assetEdge = data.allContentfulAsset.edges.find(
          edge => edge.node.title === node.data.target.fields.title['en-US']
        );

        const alt = node.data.target.fields.title['en-US'];
        return <Img alt={alt} fluid={assetEdge.node.fluid} />;
      }
    }
  };

  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title} />
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
    </Layout>
  );
};

export default BlogPost;
