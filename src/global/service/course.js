import request from "@/global/request/axios";
import API from "@/global/request/api";

const Course = {
  list: function(params){
    return request.get(API.course,params);
  },
  insert:function(params){
    return request.post(API.course,params);
  },
  single:function(id){
    return request.get(API.courseItem(id))
  },
  update:function(id,params){
    return request.put(API.courseItem(id),params)
  },
  delete:function(id){
    return request.delete(API.courseItem(id))
  }
}


export default Course;