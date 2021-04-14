<template>
  <div class="container">
    <MainTable :tableData="tableData" :tableHeader="tableHeader"></MainTable>
  </div>
</template>




<script>
import { getLabelData } from "@/api/data.js";
import MainTable from "@/components/MainTable";
export default {
  data() {
    return {
      // 表格数据
      tableData: [],
      // 表头名称
      tableHeader: [
        { text: "Lid", value: "标签ID" },
        { text: "Lname", value: "标签名" }
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
      result = await getLabelData();
      this.tableData.push(result);
    }
  },
  methods: {},
};
</script>