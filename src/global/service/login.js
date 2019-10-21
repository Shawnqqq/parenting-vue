import request from "@/global/request/axios";
import API from "@/global/request/api";

const login = {
  list: function(){
    return request.post(API.authLogin);
  }
}


export default login;
