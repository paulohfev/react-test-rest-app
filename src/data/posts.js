import axios from 'axios';

const getPosts = () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/posts`)
    .then(response => response.data);
}

export default getPosts;
