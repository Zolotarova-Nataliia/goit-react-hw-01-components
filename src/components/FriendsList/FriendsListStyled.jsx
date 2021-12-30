import styled from "styled-components";

export const FriendList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;

export const AvatarTrue = styled.img`
  object-fit: cover;
  width: 70px;
  height: 65px;
  border-radius: 50%;
  border: solid #38f100;
  margin: 0 10px;
`;

export const AvatarFalse = styled.img`
  width: 70px;
  height: 65px;
  border-radius: 50%;
  border: solid rgb(241, 0, 0);
  margin: 0 10px;
`;
