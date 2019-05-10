import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from '../styles/header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={styles.container}>
      <Link className={styles.title} to="/">
        {data.site.siteMetadata.title}
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link activeClassName={styles.activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName={styles.activeNavItem} to="/blog/">
              Blog
            </Link>
          </li>
          <li>
            <Link activeClassName={styles.activeNavItem} to="/contact/">
              Contact
            </Link>
          </li>
          <li>
            <Link activeClassName={styles.activeNavItem} to="/about/">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
