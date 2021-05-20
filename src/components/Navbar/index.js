import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

const Navbar = () => {
  const linksList = [
    {
      text: 'Posts',
      path: '/'
    },
    {
      text: 'Create',
      path: '/create'
    }
  ];

  return (
    <nav>
      <ul className={styles['navbar-list']}>
        {linksList.map((linkItem, index) => {
          return (
            <li className={styles['navbar-list-link']} key={index}>
              <Link to={linkItem.path}>
                {linkItem.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;