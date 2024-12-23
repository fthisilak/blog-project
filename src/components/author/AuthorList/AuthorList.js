import React from 'react';
import AuthorCard from '../AuthorCard/AuthorCard';
import styles from './styles.module.css';

const AuthorList = ({ authors }) => {
  return (
    <div className={styles.list}>
      {authors.map((author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  );
};

export default AuthorList;
