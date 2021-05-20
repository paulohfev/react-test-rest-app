import React, { useEffect, useState } from 'react';
import getPosts from '../../data/posts';
import pageStyles from '../pages.module.scss';
import './styles.scss';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    }

    fetchPosts();
  },[]);

  return (
    <div className={pageStyles['page-container']}>
      <h1>List of Posts</h1>

      {posts.map(post => {
        return (
          <div className={'post-item'} key={post.id}>
            <p>{post.id}</p>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })
      .reverse()}
    </div>
  )
}

export default Posts;
