import request from "@/global/request/axios";
import API from "@/global/request/api";

const Sort = {
  list: function(params) {
    return request.get(API.sort, params);
  },
  insert: function(params) {
    return request.post(API.sort, params);
  },
  single: function(id) {
    return request.get(API.sortItem(id));
  },
  update: function(id, params) {
    return request.put(API.sortItem(id), params);
  },
  all: function() {
    return request.get(API.sortAll);
  }
};

export default Sort;
