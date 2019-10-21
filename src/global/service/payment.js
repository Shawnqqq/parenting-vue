import request from "@/global/request/axios";
import API from "@/global/request/api";

const Payment = {
  list: function(params){
    return request.get(API.payment,params);
  },
  insert:function(params){
    return request.post(API.payment,params);
  }
}

export default Payment;