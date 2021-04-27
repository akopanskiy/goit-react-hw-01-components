import React from 'react' ;
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (<ul className={styles.friendList}>
        
        {friends.map((friends) => (
            <li key={friends.id} >
            <FriendListItem 
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}
            id={friends.id}
            />
            </li>
        ))}
       
    </ul>)
    
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default FriendList;