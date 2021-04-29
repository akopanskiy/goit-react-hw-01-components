import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ url, name, tag, location, followers, views, likes }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={url} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsContainer}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsContainer}>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsContainer}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
