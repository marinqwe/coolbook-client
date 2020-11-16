import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import Posts from "../components/Posts";
import { Title } from "../styles";

export const Home = ({ history }) => {
  const { postApi } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const { data } = await postApi.getAll();

        setPosts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [postApi]);

  if (loading) {
    return <Title>Loading posts...</Title>;
  }

  return (
    <div>
      <h2>Coolbook</h2>
      {posts.length ? (
        <Posts posts={posts} history={history} />
      ) : (
        <p>There are no posts yet.</p>
      )}
    </div>
  );
};
