import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const stylesIsOnline = {
  options: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    marginLeft: 5,
  },
};

const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <div className={styles.item}>
      <span
        style={{
          ...stylesIsOnline.options,
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      ></span>
      <img src={avatar} alt="" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
