import request from "@/global/request/axios";
import API from "@/global/request/api";

const Leave = {
  index: function(){
    return request.get(API.leave);
  },
  click: function(id,params){
    return request.put(API.leaveItem(id),params)
  }
}

export default Leave;