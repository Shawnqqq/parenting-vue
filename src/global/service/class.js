import request from "@/global/request/axios";
import API from "@/global/request/api";

const Class = {
  list: function(params){
    return request.get(API.class,params);
  },
  insert:function(params){
    return request.post(API.class,params);
  },
  single:function(id){
    return request.get(API.classItem(id))
  },
  update:function(id,params){
    return request.put(API.classItem(id),params)
  },
  sign:function(id,params){
    return request.post(API.classUser(id),params)
  },
  all: function(){
    return request.get(API.ClassAll);
  }
}

export default Class;