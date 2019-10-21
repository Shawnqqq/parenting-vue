import request from "@/global/request/axios";
import API from "@/global/request/api";

const Manager = {
  list: function(){
    return request.get(API.manager);
  },
  delete: function(id){
    return request.delete(API.managerItem(id));
  },
  insert:function(params){
    return request.post(API.manager,params);
  },
  update:function(id,params){
    return request.put(API.managerItem(id),params)
  }
}

export default Manager;