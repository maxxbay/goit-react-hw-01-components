import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends = [] }) {
  return (
    <ul className={s.friendList}>
      {friends.length > 0 &&
        friends.map(item => (
          <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        ))}
    </ul>
  );
}

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={
          isOnline ? `${s.status} ${s.online}` : `${s.status} ${s.offline}`
        }
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendList };
