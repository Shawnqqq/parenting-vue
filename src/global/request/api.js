//const PREFIX = 'http://localhost:3000/api';
const PREFIX = "/api";

const API = {
  authLogin: `${PREFIX}/auth/login`, //登录接口
  manager: `${PREFIX}/manager`,
  managerItem: id => `${PREFIX}/manager/${id}`,
  user: `${PREFIX}/user`,
  userItem: id => `${PREFIX}/user/${id}`,
  sort: `${PREFIX}/sort`,
  sortItem: id => `${PREFIX}/sort/${id}`,
  topic: `${PREFIX}/topic`,
  topicItem: id => `${PREFIX}/topic/${id}`,
  topicShow: id => `${PREFIX}/topicShow/${id}`,
  answer: `${PREFIX}/answer`,
  answerItem: id => `${PREFIX}/answer/${id}`
};

export default API;
