import React, { useContext, useEffect, useState } from "react";
import { UpArrow, DownArrow, ArrowGroup } from "../styles";
import { UserContext } from "../context/user-context";

function UserVote({ postId, likes, onUserVote }) {
  const { user } = useContext(UserContext);
  const [postLiked, setPostLiked] = useState(false);
  const [postDisliked, setPostDisliked] = useState(false);

  useEffect(() => {
    const userVote = likes.filter(({ userId }) => userId === user.id);
    if (userVote[0]) {
      userVote[0].voteValue === true
        ? setPostLiked(true)
        : setPostDisliked(true);
    }
  }, []);

  const voteCount = likes.reduce(
    (sum, { voteValue }) => (voteValue === true ? sum + 1 : sum - 1),
    0
  );

  return (
    <>
      <ArrowGroup>
        <UpArrow liked={postLiked} onClick={() => onUserVote(true, postId)}>
          ▲
        </UpArrow>{" "}
        {voteCount}
        <DownArrow
          disliked={postDisliked}
          onClick={() => onUserVote(false, postId)}
        >
          ▼
        </DownArrow>
      </ArrowGroup>
    </>
  );
}

export default UserVote;
