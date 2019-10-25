<template>
  <div class="container">
    <el-input
      class="topic-input"
      placeholder="请输入分类名称"
      v-model="input"
      clearable
    >
    </el-input>
    <el-button
      icon="el-icon-search"
      class="topic-btn"
      @click="onLoad()"
    ></el-button>
    <el-table style="width:100%;padding:30px" :data="tableData" class="topic">
      <el-table-column label="标题" width="220">
        <template slot-scope="scope">
          <span class="topic-title">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="分类" width="150">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="pv" label="PV" width="100"> </el-table-column>
      <el-table-column prop="follow" label="关注" width="100">
      </el-table-column>
      <el-table-column prop="answer_num" label="回答" width="100">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleSingle(scope.row)"
            >管理</el-button
          >
          <el-button
            size="mini"
            type="info"
            @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      layout="prev, pager, next"
      :page-size="pagination.pageSize"
      :pager-count="7"
      :current-page.sync="pagination.nowPage"
      :total="pagination.total"
      @current-change="onLoad"
    >
    </el-pagination>
  </div>
</template>

<script>
import topicService from "@/global/service/topic.js";

export default {
  data() {
    return {
      tableData: [],
      pagination: {
        pageSize: 10,
        total: 0,
        nowPage: 1
      },
      input: ""
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      let params = {
        pageSize: this.pagination.pageSize,
        nowPage: this.pagination.nowPage,
        filter: this.input
      };
      topicService.list(params).then(res => {
        this.tableData = res.data;
        this.pagination.total = res.total;
      });
    },
    handleEdit(index, row) {
      let id = row.id;
      this.$router.push({ name: "topicEdit", params: { id } });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该话题, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let id = row.id;
          topicService.delete(id).then(res => {
            this.$message({
              type: "success",
              message: res.message
            });
          });
          this.tableData.splice(index, 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleSingle(row) {
      let id = row.id;
      this.$router.push({ name: "answer", params: { id } });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  box-shadow: 2px 2px 8px rgba(153, 153, 153, 0.349);
  background-color: #fff;
}
.topic-input {
  width: 200px;
  margin: 20px 0 0 40px;
}
.topic-btn {
  margin-left: 10px;
}
.pagination {
  padding: 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
}
.topic-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
