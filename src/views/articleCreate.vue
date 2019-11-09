<template>
  <div class="container">
    <h3 class="title">增加一个文章</h3>
    <form class="article-form">
      <span class="text-title">标题</span>
      <el-input class="text-input" v-model="title" placeholder="请输入名称" />
    </form>
    <div class="image-title">内容图：</div>
    <el-upload
      class="avatar-uploader"
      action=""
      :show-file-list="false"
      :http-request="handleContent"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="contentUrl" :src="contentUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-button class="btn" type="primary" @click="handleCreate">添加</el-button>
  </div>
</template>

<script>
import qiniuService from "@/global/service/qiniu.js";
import articleService from "@/global/service/article.js";

export default {
  data() {
    return {
      contentUrl: "",
      title: ""
    };
  },
  methods: {
    handleCreate() {
      if (this.contentUrl && this.title) {
        let params = {
          content: this.contentUrl,
          title: this.title
        };
        articleService.insert(params).then(res => {
          if (res.code !== 200) {
            this.$message({
              message: res.message,
              type: "warning"
            });
            return;
          }
          this.$router.push({ name: "article" });
        });
      } else {
        this.$message({
          message: "缺少必要参数",
          type: "warning"
        });
      }
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    handleCover(files) {
      qiniuService.upload(files.file).then(res => {
        this.imageUrl = res;
      });
    },
    handleContent(files) {
      qiniuService.upload(files.file).then(res => {
        this.contentUrl = res;
      });
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
.title {
  padding: 20px;
}
.image-title,
.text-title {
  padding: 20px 0 0 20px;
}
.btn {
  margin: 20px;
}
.avatar-uploader,
.el-upload {
  width: 178px;
  height: 178px;
  border: 1px dashed #4169e1;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin: 0 0 30px 100px;
}
.avatar-uploader:hover {
  border-color: #000080;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.text-input {
  margin: 20px 0 0 50px;
  width: 240px;
}
.article-form {
  display: flex;
}
</style>
