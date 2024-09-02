import propTypes from 'prop-types';
import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div className={s.friendItem}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx(isOnline === true ? s.green : s.red)}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    )
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};


export default FriendListItem;