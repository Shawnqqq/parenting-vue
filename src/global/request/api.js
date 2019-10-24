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
  topicItem: id => `${PREFIX}/topic/${id}`
  // ClassAll: `${PREFIX}/classAll`,
  // classUser: id => `${PREFIX}/class/${id}/addUser`,
  // lessonItem: id => `${PREFIX}/lesson/${id}` ,
  // lessonClick: id => `${PREFIX}/lesson/${id}/click`,
  // leave:`${PREFIX}/leave`,
  // leaveItem:  id => `${PREFIX}/leave/${id}`
};

export default API;
