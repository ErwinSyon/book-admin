<template>
  <div class="container">
    <el-row :gutter="10">
      <el-col :xs="10" :sm="12" :md="12" :lg="12" :xl="12">
        <el-input v-model="searchText" clearable placeholder="输入关键字搜索" />
      </el-col>
      <el-col :xs="6" :sm="4" :md="2" :lg="2" :xl="1">
        <el-button type="primary" @click="handleAdd()"> 新增 </el-button>
      </el-col>
      <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="2">
        <!-- <el-button type="danger" @click="dialogVisible = true">
          批量删除
        </el-button> -->
        <el-popconfirm
          icon="el-icon-info"
          icon-color="red"
          title="确定删除吗？"
          @confirm="handleAllDelete()"
        >
          <el-button type="danger" slot="reference"> 批量删除 </el-button>
        </el-popconfirm>
      </el-col>
      <el-col :xs="6" :sm="4" :md="3" :lg="2" :xl="1">
        <el-button @click="handleImport()"> 导入 </el-button>
      </el-col>
      <el-col :xs="6" :sm="4" :md="2" :lg="2" :xl="1">
        <el-button @click="handleExport()"> 导出 </el-button>
      </el-col>
    </el-row>

    <!-- <el-dialog title="提示" :visible.sync="dialogVisible" width="300px">
      <span>确定删除吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAllDelete()">确 定</el-button>
      </span>
    </el-dialog> -->

    <el-table
      ref="multipleTable"
      :data="
        tableData
          .filter(
            (data) =>
              !searchText ||
              data[Object.keys(data)[0]]
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
              data[Object.keys(data)[1]]
                .toLowerCase()
                .includes(searchText.toLowerCase()) ||
              data[Object.keys(data)[2]]
                .toLowerCase()
                .includes(searchText.toLowerCase())
          )
          .slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      max-height="860"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column
        v-for="(item, index) in tableHeader"
        :key="index"
        :prop="item.text"
        :label="item.value"
        sortable
        :show-overflow-tooltip="true"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="确定删除吗？"
            @confirm="handleDelete(scope.$index, scope.row)"
            aria-disabled
          >
            <el-button size="mini" type="danger" slot="reference">
              删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>


<script>
export default {
  name: "MainTable",
  data() {
    return {
      // 搜索框文本
      searchText: "",
      // 是否弹出对话框
      // dialogVisible: false,
      // 当前所在页数
      currentPage: 1,
      // 每页数据个数
      pageSize: 15,
      // 每页数据个数选择器
      pageSizes: [15, 30, 45, 60],
      // 表格选中项
      multipleSelection: [],
    };
  },
  props: ["tableData", "tableHeader"],
  methods: {
    handleEdit(index, row) {
      // TODO:编辑信息
      console.log(index, row);
    },
    handleDelete(index, row) {
      // TODO:删除信息
      let num = (this.currentPage - 1) * this.pageSize + index;
      this.tableData.splice(num, 1);
      // console.log(num);
    },
    // 表格数据选中时
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 改变每页显示数据个数
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 改变当前所在页数
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleAllDelete() {
      // TODO:批量删除
      let result;
      for (let index = 0; index < this.multipleSelection.length; index++) {
        result = this.tableData.indexOf(this.multipleSelection[index]);
        this.tableData.splice(result, 1);
      }
      this.dialogVisible = false;
    },
    handleAdd() {
      // TODO:新增数据
    },
    handleImport() {
      // TODO:导入数据
    },
    handleExport() {
      // TODO:导出数据
    },
  },
  mounted() {},
};
</script>