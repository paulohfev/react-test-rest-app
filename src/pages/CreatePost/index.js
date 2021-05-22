import React, { useState } from 'react';
import axios from 'axios';
import redirectToHomePage from '../../utils/redirectHome';
import pageStyles from '../pages.module.scss';
import styles from './createPost.module.scss';

const CreatePost = () => {
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');

  const onFormSubmit = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/posts`, {
      title: titleValue,
      body: bodyValue,
      userId: 1
    })
    .then((response) => {
      alert(JSON.stringify(response.data));
      redirectToHomePage();
    }, (error) => {
      console.log(error);
    });
  };

  return (
    <div className={pageStyles['page-container']}>
      <h1>Create a Post</h1>

      <div className={styles['form']}>
        <input
          className={styles['field']}
          onChange={e => setTitleValue(e.target.value)}
          placeholder={'Title'}
          value={titleValue}
        />
        <input
          className={styles['field']}
          onChange={e => setBodyValue(e.target.value)}
          placeholder={'Write your post'}
          value={bodyValue}
        />
        <button
          className={styles['button']}
          onClick={onFormSubmit}
          type={'submit'}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
