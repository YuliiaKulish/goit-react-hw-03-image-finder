import axios from 'axios';

const API_KEY = '31181308-158463dc7f9307c0e361cf5dc';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchData = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  const { hits } = data;
  return hits;
};
