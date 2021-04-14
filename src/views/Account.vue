<template>
  <div class="container">
    <MainTable :tableData="tableData" :tableHeader="tableHeader"></MainTable>
  </div>
</template>




<script>
import { getAccountData } from "@/api/data.js";
import MainTable from "@/components/MainTable";
export default {
  data() {
    return {
      // 表格数据
      tableData: [],
      // 表头名称
      tableHeader: [
        { text: "Uid", value: "用户ID" },
        { text: "Amount", value: "账户余额" },
        { text: "Avalue", value: "充值/消费金额" },
        { text: "Atime", value: "充值/消费时间" },
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
      result = await getAccountData();
      this.tableData.push(result);
    }
  },
  methods: {},
};
</script>