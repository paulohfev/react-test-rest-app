import React, { useEffect, useState } from 'react';
import EditPostModal from '../../components/EditPostModal';
import { getPosts, deletePost } from '../../data/posts';
import pageStyles from '../pages.module.scss';
import styles from './posts.module.scss';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editablePostData, setEditablePostData] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts();
      setPosts(data);
    }

    fetchPosts();
  },[]);

  const deleteSinglePost = async (postId) => {
    const res = await deletePost(postId);
    return res;
  };

  return (
    <div className={pageStyles['page-container']}>
      <h1>List of Posts</h1>

      {posts.map(post => {
        return (
          <div className={styles['post-item']} key={post.id}>
            <div className={styles['post-item-container']}>
              <div className={styles['post-item-content']}>
                <p>{post.id}</p>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>

              <div className={styles['post-item-buttons']}>
                <button
                  className={styles['post-item-edit-button']}
                  onClick={() => {
                    setModalOpen(true);
                    setEditablePostData({
                      body: post.body,
                      id: post.id,
                      title: post.title
                    })
                  }}
                >
                  &#9998;
                </button>

                <button
                  className={styles['post-item-delete-button']}
                  onClick={() => deleteSinglePost(post.id)}
                >
                  &#x1F5D1;
                </button>
              </div>
            </div>
          </div>
        )}
      )}

      {modalOpen ? (
        <EditPostModal
          editablePostData={editablePostData}
          setModalOpen={setModalOpen}
        /> ) : null
      }
    </div>
  )
}

export default Posts;
