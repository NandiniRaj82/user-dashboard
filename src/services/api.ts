import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const fetchUserActivities = async (userId: number) => {
  const response = await axios.get(`${API_URL}/posts?userId=${userId}`);
  return response.data;
};
