import axios from 'axios';

const KEY = 'AIzaSyC1nd2oYBn9TleEaoq6Jon5QoHCFtFnEDo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
