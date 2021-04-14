<template>
  <div class="container">
    <MainTable :tableData="tableData" :tableHeader="tableHeader"></MainTable>
  </div>
</template>




<script>
import { getBorrowData } from "@/api/data.js";
import MainTable from "@/components/MainTable";
export default {
  data() {
    return {
      // 表格数据
      tableData: [],
      // 表头名称
      tableHeader: [
        { text: "Uid", value: "用户ID" },
        { text: "Username", value: "用户名" },
        { text: "Bid", value: "图书ID" },
        { text: "Bname", value: "图书名" },
        { text: "Btime", value: "借阅时间" },
        { text: "Rtime", value: "归还时间" },
        { text: "State", value: "状态" },
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
      result = await getBorrowData();
      this.tableData.push(result);
    }
  },
  methods: {},
};
</script>