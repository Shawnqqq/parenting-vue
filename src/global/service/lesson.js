import request from "@/global/request/axios";
import API from "@/global/request/api";

const Lesson = {
  single:function(id){
    return request.get(API.lessonItem(id))
  },
  update:function(id,params){
    return request.put(API.lessonItem(id),params)
  },
  click: function(id,params){
    return request.put(API.lessonClick(id),params)
  }
}

export default Lesson;