<template>
  <div class="container">
    <el-table
      :data="tableData"
      max-height="899"
      style="width: 100%; height=20px"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="Rid" label="角色ID" sortable width="120">
      </el-table-column>
      <el-table-column prop="Rname" label="角色名" sortable width="120">
      </el-table-column>
      <el-table-column prop="Power" label="角色权限"></el-table-column>
      <el-table-column align="right">
        <template slot="header">
<el-button type="primary" @click="handleAdd()"> 新增 </el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-popconfirm
            icon="el-icon-info"
            icon-color="red"
            title="确定删除吗？"
          >
            <el-button
              size="mini"
              type="danger"
              slot="reference"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import { getRoleData } from "@/api/data.js";
export default {
  data() {
    return {
      tableData: [],
      searchText: "",
    };
  },
  // 异步请求
  async mounted() {
    let result;
    for (let index = 0; index < 3; index++) {
      result = await getRoleData();
      this.tableData.push(result);
    }
  },
  methods: {
    handleEdit(index, row) {
      // TODO:编辑信息
      console.log(index, row);
    },
    handleDelete(index, row) {
      // TODO:删除信息
      console.log(index, row);
    },
    handleAdd(){
      // TODO:新增
    }
  },
};
</script>