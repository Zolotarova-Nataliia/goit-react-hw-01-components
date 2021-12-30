import PropTypes from "prop-types";
import {
  AvatarTrue,
  AvatarFalse,
  FriendListItem,
} from "./FriendsListStyled.jsx";
export default function FriendsListItem({ friend: { avatar, name, status } }) {
  const Avatar = status ? AvatarTrue : AvatarFalse;
  return (
    <FriendListItem>
      <Avatar src={avatar} alt="User avatar" />
      <p> {name}</p>
    </FriendListItem>
  );
}

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }),
};
