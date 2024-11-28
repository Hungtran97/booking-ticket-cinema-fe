import axiosClient from './axiosClient';

const userApi = {
  getAll(params) {
    url = '/users';
    return axiosClient.get(url, { params });
  },
  get(id) {
    url = `/user/${id}`;
    return axiosClient.get(url);
  },
  create(data) {
    url = `/user`;
    return axiosClient.post(url, data);
  },
  update(data) {
    url = `/user/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    url = `/user/${id}`;
    return axiosClient.delete(url);
  },
};
export default userApi;
