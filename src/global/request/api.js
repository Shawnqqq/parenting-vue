//const PREFIX = 'http://localhost:3000/api';
const PREFIX = "/api";

const API = {
  authLogin: `${PREFIX}/auth/login`, //登录接口
  manager: `${PREFIX}/manager`,
  managerItem: id => `${PREFIX}/manager/${id}`,
  user: `${PREFIX}/user`,
  userItem: id => `${PREFIX}/user/${id}`,
  userInfo: `${PREFIX}/userInfo`,
  category: `${PREFIX}/category`,
  categoryItem: id => `${PREFIX}/category/${id}`,
  topic: `${PREFIX}/topic`,
  topicItem: id => `${PREFIX}/topic/${id}`,
  topicShow: id => `${PREFIX}/topicShow/${id}`,
  answer: `${PREFIX}/answer`,
  answerItem: id => `${PREFIX}/answer/${id}`,
  qiniuToken: `${PREFIX}/qiniu`,
  qiniu_API: "https://upload-z2.qiniup.com",
  column: `${PREFIX}/column`,
  columnItem: id => `${PREFIX}/column/${id}`,
  columnSelected: id => `${PREFIX}/columnSelected/${id}`,
  columnUnSelected: id => `${PREFIX}/columnUnSelected/${id}`
};

export default API;
