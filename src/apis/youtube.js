import axios from 'axios';

const KEY = 'AIzaSyC1nd2oYBn9TleEaoq6Jon5QoHCFtFnEDo';

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

export default youtube;
