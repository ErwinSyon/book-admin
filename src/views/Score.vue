<template>
  <div class="container">
    <MainTable :tableData="tableData" :tableHeader="tableHeader"></MainTable>
  </div>
</template>




<script>
import { getScoreData } from "@/api/data.js";
import MainTable from "@/components/MainTable";
export default {
  data() {
    return {
      // 表格数据
      tableData: [],
      // 表头名称
      tableHeader: [
        { text: "Bid", value: "图书ID" },
        { text: "Uid", value: "用户ID" },
        { text: "Comment", value: "评论内容" },
        { text: "Ctime", value: "评论时间" },
        { text: "Score", value: "评分" },
      ],
    };
  },
  components: {
    MainTable,
  },
  // 异步请求
  async mounted() {
    let result;
    for (let index = 0; index < 30; index++) {
      result = await getScoreData();
      this.tableData.push(result);
    }
  },
  methods: {},
};
</script>