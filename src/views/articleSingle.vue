<template>
  <div class="container">
    <el-upload
      class="editContent"
      action=""
      :show-file-list="false"
      :http-request="handleEditContent"
      :before-upload="beforeAvatarUpload"
    >
      编辑内容
    </el-upload>
    <el-image
      v-if="contentData.content"
      :src="contentData.content"
      class="image"
      fit="contain"
    >
    </el-image>
  </div>
</template>

<script>
import articleService from "@/global/service/article.js";
import qiniuService from "@/global/service/qiniu.js";

export default {
  data() {
    return {
      contentData: {}
    };
  },
  created() {
    this.onload();
  },
  methods: {
    onload() {
      let id = this.$route.params.id;
      articleService.single(id).then(res => {
        this.contentData = res.data;
      });
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    handleEditContent(files) {
      qiniuService.upload(files.file).then(res => {
        const content = res;
        let id = this.$route.params.id;
        articleService.update(id, { content }).then(res => {
          if (res.code !== 200) {
            console.log(res.message);
            return;
          }
          this.contentData.content = content;
        });
      });
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.image {
  max-width: 100%;
  margin: 100px 0;
}
.editImage {
  position: absolute;
  top: 40px;
  left: 40px;
  color: #66b1ff;
}
.editContent {
  position: absolute;
  top: 40px;
  right: 40px;
  color: #66b1ff;
}
</style>
