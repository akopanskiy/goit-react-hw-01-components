import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <div className={styles.item}>
            <span
              className={isOnline ? styles.statusGreen : styles.statusRed}
            ></span>
            <img src={avatar} alt="" width="48" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
