import React, { useContext, useEffect, useState } from "react";
import { UpArrow, DownArrow, ArrowGroup } from "../styles";
import { UserContext } from "../context/user-context";

function UserVote({ postId, likes }) {
  const { likesApi, user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
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

  const onUserVote = async (voteValue) => {
    try {
      setLoading(true);
      const { data } = await likesApi.userVote({
        userVote: voteValue,
        userId: user.id,
        postId,
      });
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <ArrowGroup>
        <UpArrow liked={postLiked} onClick={() => onUserVote(true)}>
          ▲
        </UpArrow>{" "}
        {loading ? "..." : voteCount}
        <DownArrow disliked={postDisliked} onClick={() => onUserVote(false)}>
          ▼
        </DownArrow>
      </ArrowGroup>
    </>
  );
}

export default UserVote;
