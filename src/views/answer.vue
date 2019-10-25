<template>
  <div class="container">
    <div class="container-topic">
      <el-table :data="tableData" border>
        <el-table-column prop="title" width="220" label="话题标题">
          <template slot-scope="scope">
            <span class="topic-title">{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="话题分类"> </el-table-column>
        <el-table-column prop="pv" label="PV"> </el-table-column>
        <el-table-column prop="follow" label="关注"> </el-table-column>
        <el-table-column prop="answer_num" label="回答"> </el-table-column>
      </el-table>
    </div>
    <el-input
      type="textarea"
      :rows="6"
      class="container-textarea"
      disabled
      v-model="tableData[0].text"
    >
    </el-input>
    <div class="container-answer">
      <el-table
        :data="answerData"
        ref="multipleTable"
        tooltip-effect="dark"
        class="answer-table"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="用户名" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.nick_name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="praise" label="点赞" width="100">
        </el-table-column>
        <el-table-column prop="collect" label="收藏" width="100">
        </el-table-column>
        <el-table-column prop="text" label="内容">
          <template slot-scope="scope">
            <span class="answer-text">{{ scope.row.text }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="创建时间" width="110">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import topicService from "@/global/service/topic.js";
import answerService from "@/global/service/answer.js";

export default {
  data() {
    return {
      tableData: [{ text: "" }],
      answerData: []
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      let id = this.$route.params.id;
      topicService.single(id).then(res => {
        if (res.code !== 200) {
          this.$message.error(res.message);
        }
        this.tableData.splice(0, 1, res.data);
      });
      answerService.single(id).then(res => {
        if (res.code !== 200) {
          this.$message.error(res.message);
        }
        res.data.forEach(data => {
          data.text = data.text.replace(/<\/?.+?>/g, "");
        });
        this.answerData = res.data;
      });
    }
  }
};
</script>

<style scoped>
.container-topic {
  box-shadow: 2px 2px 8px rgba(153, 153, 153, 0.349);
}
.container-answer {
  margin-top: 30px;
  box-shadow: 2px 2px 8px rgba(153, 153, 153, 0.349);
  background-color: #fff;
  padding: 15px;
}
.container-textarea {
  box-shadow: 2px 2px 10px rgba(153, 153, 153, 0.349);
}
.topic-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.answer-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
