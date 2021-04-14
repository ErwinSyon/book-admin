<template>
  <div class="container">
    <MainTable :tableData="tableData" :tableHeader="tableHeader"></MainTable>
  </div>
</template>




<script>
import { getBookData } from "@/api/data.js";
import MainTable from "@/components/MainTable";
export default {
  data() {
    return {
      // 表格数据
      tableData: [],
      // 表头名称
      tableHeader: [
        { text: "Bid", value: "图书ID" },
        { text: "Bname", value: "图书名" },
        { text: "Cname", value: "图书类别" },
        { text: "Author", value: "作者" },
        { text: "Publish", value: "出版社" },
        { text: "Bnumber", value: "库存" },
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
      result = await getBookData();
      this.tableData.push(result);
    }
  },
  methods: {},
};
</script>