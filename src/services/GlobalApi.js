import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/bardapi';

const getBardApi = async (userMsg) => {
  return await axios.get(BASE_URL + '?ques=' + userMsg);
};

export default {
  getBardApi,
};
