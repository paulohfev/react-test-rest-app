import React, { useState } from 'react';
import { editPost } from '../../api/posts';
import styles from './editPostModal.module.scss';

const EditPostModal = ({
    editablePostData,
    setModalOpen
  }) => {
  const [titleValue, setTitleValue] = useState(editablePostData.title);
  const [bodyValue, setBodyValue] = useState(editablePostData.body);

  const onFormSubmit = () => {
    editPost(editablePostData.id, titleValue, bodyValue);
  }

  return (
    <div className={styles['modal']}>
      <button
        className={styles['close-modal-button']}
        onClick={() => setModalOpen(false)}
      >
        &#x2715;
      </button>

      <div>
        <h1>Edit Post</h1>

        <div className={styles['modal-form']}>
          <input
            className={styles['modal-field']}
            onChange={e => setTitleValue(e.target.value)}
            placeholder={'Title'}
            value={titleValue}
          />
          <input
            className={styles['modal-field']}
            onChange={e => setBodyValue(e.target.value)}
            placeholder={'Write your post'}
            value={bodyValue}
          />
          <button
            className={styles['modal-save-button']}
            onClick={onFormSubmit}
            type={'submit'}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
