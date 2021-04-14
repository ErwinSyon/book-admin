<template>
  <div class="container">
    <MainTable :tableData="tableData" :tableHeader="tableHeader"></MainTable>
  </div>
</template>


<script>
import { getUserData } from "@/api/data.js";
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
        { text: "Email", value: "邮箱" },
        { text: "Date", value: "注册时间" },
        { text: "Password", value: "密码" },
      ],
    };
  },
  components: {
    MainTable,
  },
  // 异步请求
  async mounted() {
    let result;
    for (let index = 0; index < 50; index++) {
      result = await getUserData();
      this.tableData.push(result);
    }
  },
  methods: {},
};
</script>