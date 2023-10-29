import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/bardapi';

const getBardApi = async (userMsg) => {
  await axios.get(BASE_URL + '?ques=' + userMsg);
};

export default {
  getBardApi,
};
