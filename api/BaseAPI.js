import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  timeout: 10000,
});

export class BaseAPI {
  async get(url) {
    try {
      return await api.get(url);
    } catch (err) {
      console.log(err);
    }
  }
}
