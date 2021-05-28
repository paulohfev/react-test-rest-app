import axios from 'axios';
import redirectToHomePage from '../utils/redirectHome';

const getPosts = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/posts`)
    .then((response) => {
      return response.data
    }, (error) => {
      console.log(error)
    });
}

const deletePost = (postId) => {
  return axios.delete(`${process.env.REACT_APP_API_URL}/posts/${postId}`)
    .then((response) => {
      if (response.status === 200) {
        alert(`Post ${postId} has been deleted`);
        redirectToHomePage();
      }
    }, (error) => {
      console.log(error)
    });
}

const editPost = (postId, postTitle, postBody) => {
  return axios.patch(`${process.env.REACT_APP_API_URL}/posts/${postId}`, {
    title: postTitle,
    body: postBody,
  })
  .then((response) => {
    alert(JSON.stringify(response.data));
    redirectToHomePage();
  },(error) => {
    console.log(error);
  });
}

const createPost = (postTitle, postBody) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/posts`, {
      title: postTitle,
      body: postBody,
      userId: 1
    })
    .then((response) => {
      alert(JSON.stringify(response.data));
      redirectToHomePage();
    }, (error) => {
      console.log(error);
    });
}

export {
  createPost,
  deletePost,
  editPost,
  getPosts
};
