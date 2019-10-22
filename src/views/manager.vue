<template>
  <div>manager</div>
</template>

<script>
import managerService from "@/global/service/manager.js";
export default {
  created: function() {
    managerService.list().then(res=>{
      console.log(res)
    })
  },
}
</script>
