//const PREFIX = 'http://localhost:3000/api';
const PREFIX = '/api';

const API = {
  authLogin:`${PREFIX}/auth/login`,      //登录
  manager:`${PREFIX}/manager`,         //新增管理员
  managerItem: id  =>  `${PREFIX}/manager/${id}`,  //修改 or 查找管理员
  payment:`${PREFIX}/payment`,
  user:`${PREFIX}/user`,
  userItem: id  => `${PREFIX}/user/${id}`,
  userAll: `${PREFIX}/userAll`,
  course:`${PREFIX}/course`,
  courseItem: id => `${PREFIX}/course/${id}`,
  class:`${PREFIX}/class`,
  classItem: id => `${PREFIX}/class/${id}`,
  ClassAll: `${PREFIX}/classAll`,
  classUser: id => `${PREFIX}/class/${id}/addUser`,
  lessonItem: id => `${PREFIX}/lesson/${id}` ,
  lessonClick: id => `${PREFIX}/lesson/${id}/click`,
  leave:`${PREFIX}/leave`, 
  leaveItem:  id => `${PREFIX}/leave/${id}`
}

export default API;