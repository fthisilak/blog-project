import React from 'react';
import styles from './styles.module.css';

const AuthorCard = ({ author }) => {
  return (
    <div className={styles.card}>
      <img src={author.image} alt={author.name} className={styles.image} />
      <h3 className={styles.name}>{author.name}</h3>
      <p className={styles.bio}>{author.bio}</p>
    </div>
  );
};

export default AuthorCard;
