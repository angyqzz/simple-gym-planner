
import axios from 'axios';

const RequestService = class RequestService {
  constructor(apiUrl = '') {
    this.baseUrl = apiUrl;

    this.request = axios.create({
      baseURL: apiUrl
    });

    this.request.interceptors.response.use((response) => {
      return response.data.data;
    }, (error) => {
      return Promise.reject(error.response);
    });
  }
}

export default RequestService;
