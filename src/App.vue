<template>
  <div id="app">
    <el-container style="height: 100vh">
      <el-header>
        <div
          style="
            position: absolute;
            left: 25px;
            font-weight: bold;
            font-size: 24px;
          "
        >
          图书管理系统
        </div>
        <el-menu style="position: absolute; right: 0" mode="horizontal">
          <el-submenu index="1">
            <template slot="title">语言</template>
            <el-menu-item index="1-1">简体中文</el-menu-item>
            <el-menu-item index="1-2">英文</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">主题</template>
            <el-menu-item index="2-1">天蓝色</el-menu-item>
            <el-menu-item index="2-2">白色</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <el-avatar
              slot="title"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <el-menu-item index="3-1" @click="dialogVisible = true">
              账号设置
            </el-menu-item>

            <el-menu-item index="3-2">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu style="border: 0" default-active="1" unique-opened router>
            <!-- <el-menu-item :index="item.url">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ item.name }}</span>
              </template>
            </el-menu-item> -->
            <el-menu-item index="/home">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>首页</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/user">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span slot="title">用户管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/book">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>书籍管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/role">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span slot="title">角色管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/borrow">
              <template slot="title">
                <i class="el-icon-files"></i>
                <span slot="title">借阅管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/class">
              <template slot="title">
                <i class="el-icon-files"></i>
                <span slot="title">图书类别管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/label">
              <template slot="title">
                <i class="el-icon-files"></i>
                <span slot="title">图书标签管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/account">
              <template slot="title">
                <i class="el-icon-files"></i>
                <span slot="title">账户信息管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="/score">
              <template slot="title">
                <i class="el-icon-files"></i>
                <span slot="title">图书评论管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/setting">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">配置管理</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<style>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
}

body {
  font-size: 16px;
}

.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: -20px;
  border-top: 1px solid rgb(230, 230, 230);
}

.el-aside {
  border-top: 1px solid rgb(230, 230, 230);
  border-right: 1px solid rgb(230, 230, 230);
}
</style>

<script>
export default {
  data() {
    return {
      // asideName: [
      //   { name: "首页", url: "/home" },
      //   { name: "书籍管理", url: "/book" },
      //   { name: "用户管理", url: "/user" },
      //   { name: "配置管理", url: "/setting" },
      // ],
      dialogVisible: false,
    };
  },
  methods: {},
};
</script>