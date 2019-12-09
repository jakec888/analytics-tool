import axios from 'axios';

// Comment this when in development
// call axios directly when in production
export default axios.create({
  baseURL: 'http://localhost:3001',
  responseType: 'json',
});
