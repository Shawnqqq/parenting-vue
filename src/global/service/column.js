import request from "@/global/request/axios";
import API from "@/global/request/api";

const Column = {
  insert: function(params) {
    return request.post(API.column, params);
  },
  all: function() {
    return request.get(API.column);
  },
  single: function(id) {
    return request.get(API.columnItem(id));
  },
  update: function(id, params) {
    return request.put(API.columnItem(id), params);
  },
  columnSelected: function(id) {
    return request.get(API.columnSelected(id));
  },
  columnUnSelected: function(id) {
    return request.get(API.columnUnSelected(id));
  }
};

export default Column;
