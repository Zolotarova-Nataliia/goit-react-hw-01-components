import FriendsListItem from "./FriendsListItem";
import { FriendList } from "./FriendsListStyled.jsx";

export default function FriendsList({ friends }) {
  return (
    <FriendList>
      {friends.map((friend) => (
        <FriendsListItem key={friend.id} friend={friend} />
      ))}
    </FriendList>
  );
}
