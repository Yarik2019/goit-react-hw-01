import propTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <li className={s.friendListItem} key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    )

}

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.shape({
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        isOnline: propTypes.bool.isRequired,
        id: propTypes.number.isRequired,
    })
    ).isRequired,
};

export default FriendList;