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

export { getPosts, deletePost };
